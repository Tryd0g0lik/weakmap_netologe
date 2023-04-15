

// class Character {
// 	#hero = '';
// 	constructor() {
// 		this.heroes = { "name": '' };
// 	}
// }

class Team {
	constructor() {
		this.members = new Set();
		this.heroes = [];
	}

	add(hero) {

		function newThrow() {
			console.error(`Данный "${hero}" уже имеется всписке. `);
			return
		}

		this.members.has(hero) ? newThrow() : this.members.add(hero);


		this.members.forEach((value, index) => {

			this.heroes.push({ 'name': value })
		})

		console.log(this.heroes.length)

	}

	addAll(...heros) {


	}

	toArray() {

	}
}

const team = new Team();
team.add('Magus')
team.add('Лучник')
team.add('Magus')