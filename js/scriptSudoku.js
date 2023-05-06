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
		Board: [
			{
				"BigRow": 1,
				"BigCol": 1,
				"Missings": [
					4
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 3,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 1,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 2,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 2,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 3,
						"input": {}
					}
				]
			},
			{
				"BigRow": 1,
				"BigCol": 2,
				"Missings": [
					1,
					2,
					3,
					6
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 1,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 1,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 4,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 3,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 3,
						"globalCol": 6,
						"input": {}
					}
				]
			},
			{
				"BigRow": 1,
				"BigCol": 3,
				"Missings": [
					7
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 1,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 1,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 1,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 2,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 3,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 2,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 4,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 3,
						"globalCol": 9,
						"input": {}
					}
				]
			},
			{
				"BigRow": 2,
				"BigCol": 1,
				"Missings": [
					1,
					2,
					3,
					4,
					5,
					6,
					9
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 4,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 6,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 6,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 6,
						"globalCol": 3,
						"input": {}
					}
				]
			},
			{
				"BigRow": 2,
				"BigCol": 2,
				"Missings": [
					1,
					2,
					5,
					8
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 4,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 6,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 3,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 6,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 6,
						"globalCol": 6,
						"input": {}
					}
				]
			},
			{
				"BigRow": 2,
				"BigCol": 3,
				"Missings": [
					1,
					2,
					4,
					7,
					9
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 3,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 4,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 4,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 5,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 6,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 6,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 6,
						"globalCol": 9,
						"input": {}
					}
				]
			},
			{
				"BigRow": 3,
				"BigCol": 1,
				"Missings": [
					1,
					2,
					3,
					5,
					8
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 7,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 7,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 7,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 4,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 3,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 9,
						"globalCol": 1,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 9,
						"globalCol": 2,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 9,
						"globalCol": 3,
						"input": {}
					}
				]
			},
			{
				"BigRow": 3,
				"BigCol": 2,
				"Missings": [
					2,
					3,
					4
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 7,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 7,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 7,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 8,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 8,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 1,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 6,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 4,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 5,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 6,
						"input": {}
					}
				]
			},
			{
				"BigRow": 3,
				"BigCol": 3,
				"Missings": [
					2
				],
				"Childs": [
					{
						"Row": 1,
						"Col": 1,
						"Value": 7,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 7,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 2,
						"Value": 6,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 7,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 1,
						"Col": 3,
						"Value": 0,
						"PossibleValues": [],
						"Initiable": false,
						"globalRow": 7,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 1,
						"Value": 9,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 2,
						"Value": 5,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 2,
						"Col": 3,
						"Value": 8,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 8,
						"globalCol": 9,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 1,
						"Value": 3,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 7,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 2,
						"Value": 1,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 8,
						"input": {}
					},
					{
						"Row": 3,
						"Col": 3,
						"Value": 4,
						"PossibleValues": [],
						"Initiable": true,
						"globalRow": 9,
						"globalCol": 9,
						"input": {}
					}
				]
			}
		],
		PresentsAs: {
			RowandCol: {//Представлен как линии
				//Нужно дописать
				Rows: new Array(ColRow*ColRow),
				Cols: new Array(ColRow*ColRow)
			},
			//Представлен как...,
			//Представлен как...,]
			initPresent: function () {
				try {
					let Sudoku = this.parent
					let Boardcount = Sudoku.Board.length //Формула для квадратной доски, нужно переписать для неклассических судоку
					//SudokuBoard
					let res = {
						Rows: [[], [], [], [], [], [], [], [], []],
						Cols: [[], [], [], [], [], [], [], [], []] //Нужно написать автоматическое создание. Простой push вместо с циклом не подходит т.к. цикл только делает обход, а фактическое обращение может быть к любому элементы
					}
					for (let i = 0; i < Boardcount; i++) {
						let Childcount = Sudoku.Board[i].Childs.length

						for (let k = 0; k < Childcount; k++) {
							let row = (Sudoku.Board[i].Childs[k].globalRow - 1)
							let col = (Sudoku.Board[i].Childs[k].globalCol - 1)
							//console.log(row) //отладочный
							res.Rows[row].splice(col, 1, Sudoku.Board[i].Childs[k])
							res.Cols[col].splice(row, 1, Sudoku.Board[i].Childs[k])
						}
					}
					//console.log(res) //отладочный
					this.RowandCol = res
				} catch (error) {
					console.log('initPresent error',error)
				}
			}
		},
		init: function (ColRow) {//закоментирован на время использования тестовой доски
			// console.log(ColRow*ColRow) отладочный
			/*for (let i = 1; i < ColRow+1; i++) {
				for (let k = 1; k < ColRow+1; k++) {
					let BigCell = { //Большая ячейка 
						BigRow: i,
						BigCol: k,
						Missings: [],
						Childs: [],
					};
					let whycount = 0 //Подсчёт ячеек
					for (let m = 1; m < ColRow+1; m++) {
						for (let n = 1; n < ColRow+1; n++) { //Маленькая ячейка
							BigCell.Childs.push({
								Row: m,
								Col: n,
								Value: 0,
								PossibleValues: [],
								Initiable: false, //true значение указано при инициализации, false при решении
								globalRow: ((i-1)*ColRow+1)+(m-1),  //не готово
								globalCol: ((k-1)*ColRow+1)+(n-1),	//не готово 
								//parrent: BigCell, //Даём детям знать кто их родители //С этим свойством объект больше не копируется из консоли
								input: ''
								//i = строка большой ячейки
								//k = столбец большой ячейки
								//m = строка в ячейке
								//n = столбец в ячейке
							})
							whycount++
							BigCell.Missings.push(whycount) //Колличество ячеек это количество чисел, которых в не хватает
							//console.log('i=',i,'k=',k,'m=',m,'n=',n)
							//console.log(whycount)
							
						}
					}
					this.Board.push(BigCell)
					
				}
				
			}*/
			//console.log(this.Board)
			this.resolvers.parent = this //Передаём resolvers родительский объект https://stackoverflow.com/questions/2980763/javascript-objects-get-parent
			this.PresentsAs.parent = this
			this.PresentsAs.initPresent()
			console.log(this.PresentsAs.RowandCol)
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
		whoInput: function (/*Parrent,*/ Child) {
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
		edit: function (smallCell,value) {
			smallCell.Value = value
			smallCell.input.value = value
			this.excludeMissings(smallCell.parent,value)
			return true
		},
		getRowandCol: '',
		resolve: function () {
			let succes = 0
			let resolved = 0
			//console.log(this.Board.length) отладочный
			for (let i = 0; i < this.Board.length; i++) {
				let BigCell = this.Board[i] //Значение часто используется, кеширую
				let count = BigCell.Missings.length
				switch (count) {
					case 0: //Если в Missings ничего нет, то всё можно пропустить
						resolved++
						//console.log('0') //отладочный
						break;

					case 1: //Если в Missings только одно число, то ставит его в свободную ячейку
						succes = succes + this.resolvers.Way1(BigCell)
						//console.log('1') //отладочный
						break;

					default: //Если в Missings ещё полно значений, то нужно решать
							//let way = this.resolvers.Way2()
							succes = succes + this.resolvers.Way2()
							//console.log('2') //отладочный
							succes = succes + this.resolvers.Way3(BigCell)
							//console.log(way)
							//console.log('3') //отладочный
						break;
				}
			}

			return { succes, resolved }
		},
		resolvers: {
			Way1: function (BigCell) { //Проставляет единственный Miss блока в свободную ячейку
				let succes = 0
				let Sudoku = this.parent
				for (let k = 0; k < BigCell.Childs.length; k++) {
					if (BigCell.Childs[k].Value < 1) {
						if (Sudoku.edit(BigCell.Childs[k],BigCell.Missings[0])) {succes++} //Новый способ
						//Sudoku.whoInput(BigCell.Childs[k]).value = BigCell.Missings[0] //Устарел, заменён
					}
				}
				return succes
			},
			Way2: function () { //Проходит линии и проставляет числа, если в линии только одно место
				let succes = 0
				let checkLine = function (lines) {
					let succes = false
					let count = lines.length
					for (let i = 0; i < count; i++) {
						let Missings = [0,1,2,3,4,5,6,7,8,9]
						let isAloneZero = lines[i].filter(function (el) { //Получаем список пустых ячеек
							Missings = Missings.filter(function (item) {return item != el.Value}); //Убираем все числа, которые были в линии
							return el.Value == 0})
						if (isAloneZero.length == 1) { // Если пустая ячейка только одна, то присваеваем ей единственное отсутствующее число
							//console.log(isAloneZero[0].Value,Missings[0]) //отладочный
							if (Sudoku.edit(isAloneZero[0],Missings[0])) {succes++}
							/*isAloneZero[0].Value = Missings[0]
							isAloneZero[0].input.value = Missings[0]*/

						}
					}
					return succes //Была ли решена хоть одна линия
				}
				let Sudoku = this.parent //this переопределяется в методе filter, кэширую доску
				let RC = Sudoku.PresentsAs.RowandCol
				let Rows = RC.Rows
				let Cols = RC.Cols
				succes = (checkLine(Rows) || checkLine(Cols))
				//checkLine(Cols) //отладочный
				//console.log(Rows) //отладочный
				return succes
			},
			Way3: function (BigCell) { //проверка каждой ячейки на возможные числа
				let succes = 0
				let Sudoku = this.parent
				let RC = Sudoku.PresentsAs.RowandCol
				let smallCells = BigCell.Childs.filter(function (el) {return el.Value == 0})
				let count = smallCells.length
				for (let i = 0; i < count; i++) {
					let smallCell = smallCells[i]
					let hitch = []
					hitch = RC.Rows[smallCell.globalRow-1].concat(RC.Cols[smallCell.globalCol-1])
					hitch = Array.from(new Set(hitch.map((el) => el.Value)))
					hitch = hitch.filter((el) => el != 0)
					//console.log(hitch) //отладочный
					smallCell.PossibleValues = BigCell.Missings.filter(n => !hitch.includes(n))
					if (smallCell.PossibleValues.length == 1) {
						if (Sudoku.edit(smallCell,smallCell.PossibleValues)) {succes++}
					}
				}
				//console.log(smallCells)
				return succes
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
		let Cell = Sudoku.whoCell(input) // Можно перемести внуть if как только свойство родителей будет исполнятся в самом объекте ('Даём детям знать кто их родители')
		Cell.Child.parent = Cell.Parrent //Даём детям знать кто их родители //С этим свойством объект больше не копируется из консоли
		//console.log()
		if (input.value > 0) {

			Sudoku.excludeMissings(Cell.Parrent, input.value)
			Cell.Child.Initiable = true
			Cell.Child.Value = +input.value
			//console.log(Cell.Child,input.value) // отладочный
		}
	}
	//console.log(Sudoku.resolve())
	console.log(Sudoku.Board)
	/*let p = new Promise((resolve, reject) => {
		Sudoku.resolve()
		resolve()
	})*/
	//let repeat = true

	/*do {
		let result = Sudoku.resolve()
		switch (true) {
			case (result.resolved == 9):
				console.log('Resolved')
				repeat = false
				return
				break;
			case (result.success == 0):
				console.log('Failed')
				repeat = false
				return
				break;
			default:
				console.log('try',result)
				break;
		}
		l++
	} while (false)*/
	/*let repeat = () => {
		let again = Sudoku.resolve()
		switch (true) {
			case (again.resolved == 9):
				console.log('Resolved')
				repeat = false
				return
			case (again.success == 0):
				console.log('Failed')
				repeat = false
				return
			default:
				console.log('try',again)
				setTimeout(repeat,2000)
				break;
		}
	}*/
	let repeat = () => { //Вариант цикла
		let result = Sudoku.resolve()
		let res = result.resolved
		let suc = result.succes
		if (res == 9) {
			console.log('Resolved')
			return true
		}
		if (suc == 0) {
			console.log('Failed',Sudoku.Board)
			return false
		} else {
			console.log('try',result)
			setTimeout(repeat,1000)
		}
	}
	setTimeout(repeat,0)
	/*let result = Sudoku.resolve() //Ручное решение
	//?Все циклы останавливаются без решение с 'Failed' на четвёртом цикле, хотя вручную решается за 2 запуска.
	console.log(result)*/
	//Sudoku.getRowandCol()
}