// @t-s-check
//31
window.onload = init();

function init() { //Ищем блок для размешения игры и создаём в нём игру
	try {
		const Page = document.querySelector('body').querySelector('#all') //Получение блока для размещения игры
		const SudokuGame = document.createElement('div') //Блок игры
		const SudokuBoard = document.createElement('div') //Главная доска для игры
		const ButtonBoard = document.createElement('div')
		SudokuGame.setAttribute('class', 'SudokuGame')
		SudokuBoard.setAttribute('class', 'SudokuBoard')
		ButtonBoard.setAttribute('class', 'ButtonBoard')
		Page.appendChild(SudokuGame) //Размещаем игру
		SudokuGame.appendChild(SudokuBoard) //Размещаем доску
		SudokuGame.appendChild(ButtonBoard) //Размещаем блок с кнопками
		StartBoard(SudokuBoard, ButtonBoard)
	} catch (error) { //просто эксперимент: какие ошибки может ловить
		console.log('init Error')
		console.log(error)
	}
}

function StartBoard(SudokuBoard, ButtonBoard, ColRow = 3) { //Заполняем стартовую доску клетками
	const Sudoku = {
		Board: [],
		init: function (ColRow) {
			// console.log(ColRow*ColRow) отладочный
			let whycount = 0
			for (let i = 1; i < ColRow+1; i++) {
				for (let k = 1; k < ColRow+1; k++) {
					let BigCell = { //Большая ячейка 
						BigRow: i,
						BigCol: k,
						Missings: [1,2,3,4,5,6,7,8,9],
						Childs: [],
					};
					for (let m = 1; m < ColRow+1; m++) {
						for (let n = 1; n < ColRow+1; n++) { //Маленькая ячейка
							BigCell.Childs.push({
								Row: m,
								Col: n,
								Value: 0,
								PossibleValues: [],
								Initiable: false, //true значение указано при инициализации, false при решении
								globalRow: i*k*m*n,  //не готово
								globalCol: i*k*m*n,	//не готово
								parrent: BigCell //Даём детям знать кто их родители //С этим свойством объект больше не копируется из консоли
							})
							whycount++
							//console.log(whycount)
							console.log(BigCell.Childs)
						}
					}
					this.Board.push(BigCell)
				}
			}
			this.resolvers.parent = this //Передаём resolvers родительский объект https://stackoverflow.com/questions/2980763/javascript-objects-get-parent
		},
		whoCell: function (input) {
			let Parrent = this.Board.find(function (el) {
				return (el.BigRow == input.parentElement.getAttribute('ParrentRow') && el.BigCol == input.parentElement.getAttribute('ParrentCol'))
			})
			let Child = Parrent.Childs.find(function (el) {
				return (el.Row == input.parentElement.getAttribute('SuRow') && el.Col == input.parentElement.getAttribute('SuCol'))
			})
			return { Parrent, Child }
		},
		whoInput: function (Parrent, Child) {
			/*let Cell = document.querySelectorAll([BigSuRow=`${Parrent.BigRow}`]).querySelectorAll([BigSuCol=`${Parrent.BigCol}`])
			let resulChild = Cell.querySelectorAll([SuRow=`${Child.Row}`]).querySelectorAll([SuCol=`${Child.Col}`])
			return resulChild*/ //не работает https://stackoverflow.com/questions/2694640/find-an-element-in-dom-based-on-an-attribute-value
			/*let bigCells = document.querySelectorAll('.SudokuEl')
			for (const Cell of bigCells) { //Возможно можно оптимизировать если разделить обход параметров
				if (Cell.getAttribute('BigSuRow') == Parrent.BigRow && Cell.getAttribute('BigSuCol') == Parrent.BigCol) {
					for (const smallCell of Cell.children) {
						if (smallCell.getAttribute('SuRow') == Child.Row && smallCell.getAttribute('SuCol') == Child.Col) {
							return smallCell.querySelector('input')
						}
					}
				}
			}*/
			return Child.input
			// можно попробовать при создании инпутов сразу присваивать их свойству соответствующей ячейки объекта
		},
		excludeMissings: function (Cell, value) {
			Cell.Missings = Cell.Missings.filter((el) => { return el != value })
		},
		edit: function () {

		},
		getRowandCol: function () {
			let Rows = function () {

			}
			let count = Math.sqrt(this.Board.length) //Формула для квадратной доски, нужно переписать для неклассических судоку
			let res = {
				Rows: [],
				Cols: []
			}
			for (let i = 0; i < this.Board.length; i++) {
				
				/*this.Board.filter( (el) => {
					return el.BigRow == this.
				})*/
				res.Rows.push([])
				for (let k = 0; k < count; k++) {
					//res.Rows[i].push(this.Board[i].Childs[k])

					for (let j = 0; j < count; j++) {
						
						res.Rows[i][k] = this.Board[i].Childs[k]
						
					}
					//res.Cols[i][k] = this.Board[i].Childs[k]
					//res.Rows[res.Rows[i].length-1].Bigindex = i
					//res.Rows[res.Rows[i].length-1].index = k
					//res.Rows[i].push
				}
			}
			//!console.log(res.Rows)
			/*for (let i = 0; i < count; i++) { //3 большие
				for (let k = 0; k < count; k++) {
					for (let m = 0; m < count; m++) {
						for (let n = 0; n < count; n++) {

							
						}
						
					}
					
				}
			}*/
		},
		resolve: function () {
			//console.log(this.Board.length) отладочный
			for (let i = 0; i < this.Board.length; i++) {
				let BigCell = this.Board[i] //Значение часто используется, кеширую
				let count = BigCell.Missings.length
				switch (count) {
					case 0: //Если в Missings ничего нет, то всё можно пропустить

						break;

					case 1: //Если в Missings только одно число, то ставит его в свободную ячейку
						this.resolvers.Way1(BigCell)
						break;

					default: //Если в Missings ещё полно значений, то нужно решать
						this.resolvers.Way2(BigCell,count,i)
						break;
				}
			}
		},
		resolvers: {
			Way1: function (BigCell) {
				let Sudoku = this.parent
				for (let k = 0; k < BigCell.Childs.length; k++) {
					if (BigCell.Childs[k].Value < 1) {
						Sudoku.whoInput(BigCell, BigCell.Childs[k]).value = BigCell.Missings[0] //Теперь в малой ячейке есть свойство с инпутом, можно переписать этот вызов метода
					}
				}
			},
			Way2: function (BigCell,count,iter) {
				let Sudoku = this.parent //this переопределяется в методе filter, кэширую доску
				for (let k = 0; k < BigCell.Childs.length; k++) {
					if (BigCell.Childs[k].Value < 1) {
						for (let m = 0; m < count; m++) { //Проходим Missings и проверяем есть ли помехи
							let bigCellOnRow = Sudoku.Board.filter(function (el) { return el.BigRow == Sudoku.Board[iter].BigRow })
							let bigCellOnCol = Sudoku.Board.filter(function (el) { return el.BigCol == Sudoku.Board[iter].BigCol })
							let smallCellOnRow = bigCellOnRow.map(function (el) {
								let count = el.Childs.length
								let arr = []
								for (let j = 0; j < count; j++) {
									//console.log(el.Childs)
									if (el.Childs[j].Row == BigCell.Childs[k].Row) {
										//console.log(el.Childs[j])
										arr.push(el.Childs[j])
									}
								}
								return arr
							}).flat()
							let smallCellOnCol = bigCellOnCol.map(function (el) {
								let count = el.Childs.length
								let arr = []
								for (let b = 0; b < count; b++) {
									if (el.Childs[b].Col == BigCell.Childs[k].Col) {
										arr.push(el.Childs[b])
									}
								}
								return arr
							}).flat()
							//console.log(BigCell.Missings[m],smallCellOnRow,smallCellOnCol)
							if (smallCellOnRow.includes(BigCell.Missings[m]) && smallCellOnCol.includes(BigCell.Missings[m])) {
								console.log(true)
							}

							//console.log(bigCellOnRow,smallCellOnRow,k)

							/*if (BigCell.Missings[m]) {

							}*/
						}
					}
				}
			},
			Way3: function () {
				//проверка если в строке/колонне только один отсутствущий элемент
			},
			Way4: function () {

			},
		}
	}
	Sudoku.init(ColRow)
	placeSudokuCells(SudokuBoard, Sudoku)
	initButtonBoard(SudokuBoard, ButtonBoard, Sudoku)
	//console.log(Sudoku)
}

function placeSudokuCells(parent, Sudoku) {
	try {
		for (let i = 0; i < Sudoku.Board.length; i++) { //Создаём большие блоки
			const SudokuEl = document.createElement('div');
			SudokuEl.setAttribute('class', 'SudokuEl')
			SudokuEl.setAttribute('BigSuRow', Sudoku.Board[i].BigRow) //Технический атрибут для строки
			SudokuEl.setAttribute('BigSuCol', Sudoku.Board[i].BigCol) //Технический атрибут для колонны
			parent.appendChild(SudokuEl)
			// console.log(Sudoku.Board[i].Childs) отладочный
			for (let k = 0; k < Sudoku.Board[i].Childs.length; k++) { //Создаём маленькие блоки
				const SmallEl = document.createElement('div');
				SmallEl.setAttribute('class', 'SudokuSmallEl')
				SmallEl.setAttribute('ParrentRow', (SudokuEl.getAttribute('BigSuRow'))) // Родительский атрибут строки
				SmallEl.setAttribute('ParrentCol', (SudokuEl.getAttribute('BigSuCol'))) // Родительский атрибут колонны
				SmallEl.setAttribute('SuRow', Sudoku.Board[i].Childs[k].Row) //Технический атрибут для строки
				SmallEl.setAttribute('SuCol', Sudoku.Board[i].Childs[k].Col) //Технический атрибут для колонны
				SudokuEl.appendChild(SmallEl)

				const input = document.createElement('input') // Создаём инпут для значения ячейки
				Sudoku.Board[i].Childs[k].input = input
				if (Sudoku.Board[i].Childs[k].Value != 0 && Sudoku.Board[i].Childs[k].Value != undefined) {
					input.value = Sudoku.Board[i].Childs[k].Value

				}
				SmallEl.appendChild(input)

				input.setAttribute('readonly', '')
				///*(typeof(input.value.match(/\d+/))) ? '' :*/ input.value.match(/\d+/).toString().slice(-1);}
				//input.onclick = (elem) => {input.value = (input.value.length == 0 || input.value.match(/\d+/).toString().length == 0) ? '' : input.value.match(/\d+/).toString().slice(-1)}
				//input.onblur = (elem) => {input.value = input.value.charAt(0)}
				//(typeof(input.value.match(/\d+/))) ? '' : input.value.match(/\d+/).toString().slice(-1);}
				//input.oncuechange = (elem) => {input.value = (input.value.length == 0 || input.value.match(/\d+/).toString().length == 0) ? '' : input.value.match(/\d+/).toString().slice(-1)}
				//input.blur = () =>
			}
		}
	} catch (error) { //просто эксперимент: какие ошибки может ловить
		console.log('placeSudokuCells Error')
		console.log(error)
	}
}

function initButtonBoard(SudokuBoard, ButtonBoard, Sudoku) {
	const button_Edit = document.createElement('button')
	const button_Resolve = document.createElement('button')
	button_Edit.setAttribute('class', 'button_Edit')
	button_Resolve.setAttribute('class', 'button_Resolve')
	button_Edit.innerText = 'Edit'
	button_Resolve.innerText = 'Resolve'
	ButtonBoard.appendChild(button_Edit)
	ButtonBoard.appendChild(button_Resolve)
	button_Edit.addEventListener('click', function () { sudokuButtonEdit(SudokuBoard, Sudoku) })
	button_Resolve.addEventListener('click', function () { sudokuButtonResolve(SudokuBoard, Sudoku) })
}

function sudokuButtonEdit(Board, Sudoku) {
	const inputs = Board.querySelectorAll('.SudokuSmallEl input') //Получаем инпуты интересующей доски
	for (let i = 0; i < inputs.length; i++) {
		let input = inputs[i] //Переменная для инпута обрабатываемого в цикле(для краткости)
		input.removeAttribute('readonly') //убираем флаг "только чтение", теперь в инпут можно писать
		input.addEventListener('click', function () { //При клике на инпут добавляет число из него обратно в Missings чтодбы его можно было переназначить
			let Cell = Sudoku.whoCell(input) //[input.parentElement.getAttribute('ParrentRow')*input.parentElement.getAttribute('ParrentCol')-1]
			if (input.value > 0) {
				Cell.Parrent.Missings.push(+input.value)
				Cell.Parrent.Missings = Array.from(new Set(Cell.Parrent.Missings))
			}
			console.log(Cell)
		})
		input.addEventListener('input', function () {
			let Cell = Sudoku.whoCell(input) //[input.parentElement.getAttribute('ParrentRow')*input.parentElement.getAttribute('ParrentCol')-1]
			//console.log(Cell)
			let reg = new RegExp(`[^${Cell.Parrent.Missings.join('')}]`, 'g')
			let Num = input.value.replace(reg, '') //Контроль совпадения вводимого числа с одним из недостающих(Missings) чисел
			input.value = (Num.length > 1) ? Num.charAt(1) : Num.charAt(0) //Реплейсер по контролю вводимых чисел
			//console.log(reg,Num,input.value) отладочный
		})
		input.addEventListener('blur', function () {
			let Cell = Sudoku.whoCell(input)  //[input.parentElement.getAttribute('ParrentRow')*input.parentElement.getAttribute('ParrentCol')-1]
			Sudoku.excludeMissings(Cell.Parrent, input.value) //Убирает число из Missings и тем самым фиксирует какие числа уже есть в большой ячейке
			//console.log(Cell.Parrent.Missings) отладочный
		})
		/*= (elem) => {
			let Num = input.value.replace(/[^1-9]/,'')
			input.value = (Num.length > 1) ? Num.charAt(1) : Num.charAt(0)}
			console.log(input)*/
	}
	//console.log('editable',inputs) отладочный
}

function sudokuButtonResolve(SudokuBoard, Sudoku) {
	const inputs = SudokuBoard.querySelectorAll('.SudokuSmallEl input')
	let resolved = 0
	for (let i = 0; i < inputs.length; i++) {
		let input = inputs[i]
		input.setAttribute('readonly', '')
		 //(уже убран) Можно перемести внуть if как только свойство родителей будет исполнятся в самом объекте ('Даём детям знать кто их родители')
		//Cell.Child.parent = Cell.Parrent //Даём детям знать кто их родители //С этим свойством объект больше не копируется из консоли
		//console.log()
		if (input.value > 0) {
			let Cell = Sudoku.whoCell(input)
			Sudoku.excludeMissings(Cell.Parrent, input.value)
			Cell.Child.Initiable = true
			Cell.Child.Value = +input.value
			//console.log(Cell.Child,input.value) // отладочный
		}
	}
	//console.log(Sudoku.Board)
	//Sudoku.resolve()
	Sudoku.getRowandCol()
}