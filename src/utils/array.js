import axios from 'axios';
import MersenneTwister from './mersenne-twister'

export default {
    
    removeValue(values, valueToRemove) {
        var sortedArray = [];

        for (let index in values) {
            let value = values[index];
            if (value != valueToRemove) {
                sortedArray.push(value);
            }
        }
        return sortedArray;
    },

    sortTeams(array) {
        //console.log(array);
        let sortedArray = array.map((x) => x);
        let currentIndex = sortedArray.length, randomIndex;
        let mersenne = new MersenneTwister();
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(mersenne.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [sortedArray[currentIndex], sortedArray[randomIndex]] = [
                sortedArray[randomIndex], sortedArray[currentIndex]];
        }

        let team1 = [];
        let team2 = [];

        for (let index in sortedArray) {
            if (index % 2) {
                team1.push(sortedArray[index]);
            } else {
                team2.push(sortedArray[index]);
            }
        }

        return [team1, team2];
    },

    async getChampions() {
        try {
            const config = {
                method: 'get',
                url: 'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json'
            }
            const response = await axios(config);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    splitJsonToArray(completeJson) {
        let array = []
        for (let item in completeJson) {
            array.push(item);
        }
        return array;
    },

    sortChampions(champions, quantity) {
        quantity--;
        let sortedIndex = [];
        let sortedChampions = [];
        let mersenne = new MersenneTwister();
        for (let i = 0; i <= quantity; i++) {
            const newIndex = Math.floor(mersenne.random() * champions.length);
            if (!sortedIndex.includes(newIndex)) {
                if (champions[newIndex] === undefined) {
                    i--;
                } else {
                    sortedIndex.push(newIndex);
                    sortedChampions.push(champions[newIndex]);
                }
            } else {
                i--;
            }
        }
        return sortedChampions;
    }
}