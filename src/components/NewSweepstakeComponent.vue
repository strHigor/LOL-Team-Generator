<template>
    <dialog id="newSweepstake">
        <div id="header">
            <button @click="closeModal()"> X </button>
        </div>

        <h2> INFORME OS PARTICIPANTES </h2>
        <div id="addParticipant">
            <div>
                <label for="name">Nome</label>
                <input type="text" name="name" v-model="name" @keydown.enter="addParticipant()">
                <button id="addNewParticipant" @click="addParticipant()">ADICIONAR</button>
            </div>
        </div>

        <div id="participantsToSort">
            <Participant v-for="participant in allParticipants" :name="participant" @submitRemove="removeParticipant" />
        </div>

        <div id="sortTeams">
            <div>
                <label for="dice">Dados (zero por padrão)</label>
                <input type="number" name="dice" v-model="dices" @keydown.enter="sortTeams()">
                <button id="addNewParticipant" @click="sortTeams()"> SORTEAR </button>
            </div>
        </div>
    </dialog>
</template>

<script>
import Participant from './Participant.vue';
import Array from '../utils/array';

export default {
    components: {
        Participant
    },
    name: 'NewSweepstake',
    emits: ['Sweepstake', 'CloseNewSweepstake'],
    data() {
        return {
            allParticipants: '',
            name: '',
            dices: 0,
            participants: ['Felipe', 'Murilo', 'Higor', 'FC', 'Gustavo', 'Paulino', 'Gabus', 'Rodrigo', 'Random 1', 'Random 2'],
            teams: [],
            champions: [],
        }
    },
    methods: {
        openModal() {
            document.getElementById('newSweepstake').showModal()
        },

        closeModal() {
            this.$emit('CloseNewSweepstake', false);
        },

        addParticipant() {
            if (this.name.length > 0) {
                this.allParticipants.push(this.name);
                this.name = "";
            } else {
                alert("Informe o nome antes de adicionar");
            }
        },

        sortTeams() {
            this.teams = Array.sortTeams(this.allParticipants);

            const allChampions = new Promise((resolve, reject) => {
                const teste = true;

                if (teste == true) {
                    resolve(Array.getChampions());
                } else {
                    reject("No");
                }
            });

            allChampions.then((data) => {
                let allChampionsArray = Array.splitJsonToArray(data.data);
                let sortedChampions = Array.sortChampions(allChampionsArray, (this.allParticipants.length * (this.dices + 1)));
                this.champions = Array.sortTeams(sortedChampions);
                this.$emit('Sweepstake', [this.teams, this.champions])
                this.closeModal();
            });

        },

        removeParticipant(participant) {
            console.log(participant);
            this.allParticipants = Array.removeValue(this.allParticipants, participant);
        },

        teste() {
            console.log(this.allParticipants.length);
        }
    },

    mounted() {
        this.allParticipants = this.participants;
        this.openModal();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Montserrat:wght@200&family=Roboto:ital,wght@0,100;0,300;1,100&display=swap');

#addParticipant {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #212121;
    margin-bottom: 20px;
}

label {
    font-family: 'Belanosima', sans-serif;
    font-weight: bold;
    font-size: 13px;
    margin-left: 3px;
    line-height: 24px;
    display: block;
}

input {
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    border-color: #5c65c9;
    box-shadow: 0px 0px 1px 1px #edeefb;
    background-color: #f9f9f9;

}

#addNewParticipant {
    font-family: 'Belanosima', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 200px;
    background-color: #2f2fe9;
    box-shadow: 0px 0px 1px 1px #d2c6ff;
    border-radius: 5px;
    color: aliceblue;
    margin-left: 10px;
}

#addNewParticipant:hover {
    background-color: #2020af;
}

#header {
    display: flex;
    justify-content: end;
}

#newSweepstake::backdrop {
    background-color: rgb(0 0 0 / .3);
}

#newSweepstake {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-10%, -50%);
    height: 620px;
    width: 500px;
    padding: 30px;
    border: none;
    border-radius: .5rem;
    box-shadow: 0 0 1em rgb(0 0 0 /.3);
}

#participantsToSort {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

#sortTeams {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>