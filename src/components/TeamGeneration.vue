<template>
    <NewSweepstake v-if="showNewSweepstake" ref="newSweepstake" @Sweepstake="sweepstake"
        @CloseNewSweepstake="closeNewSweepstake" />

    <div id="sortedTeams">
        <div id="teams">
            <div id="team1" v-if="champions.length > 0 && teams.length > 0">
                <div id="blueTeamChampions">
                    <div v-for="champion in champions[0]">
                        <h5> {{ champion }} </h5>
                        <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/' + champion + '.png'"
                            width="100" height="100">
                    </div>
                </div>

                <div id="blueTeamParticipants">
                    <div class="blueTeam" v-for="participant in teams[0]">
                        {{ participant.toUpperCase() }}
                    </div>
                </div>
            </div>

            <button id="buttonNewSweepstake" @click="newSweepstake()"> </button>

            <div id="team2" v-if="champions.length > 0 && teams.length > 0">
                <div id="redTeamParticipants">
                    <div class="redTeam" v-for="participant in teams[1]">
                        {{ participant.toUpperCase() }}
                    </div>
                </div>

                <div id="redTeamChampions">
                    <div v-for="champion in champions[1]">
                        <h5> {{ champion }} </h5>
                        <img v-bind:src="'http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/' + champion + '.png'"
                            width="100" height="100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewSweepstake from './NewSweepstakeComponent.vue';

export default {
    components: {
        NewSweepstake
    },
    data() {
        return {
            showNewSweepstake: false,
            teams: [],
            champions: [],
        };
    },

    methods: {
        sweepstake(sweepstake) {
            this.teams = sweepstake[0];
            this.champions = sweepstake[1];
        },

        newSweepstake() {
            this.showNewSweepstake = true;
        },

        closeNewSweepstake(visible) {
            this.showNewSweepstake = visible;
        }
    }
}
</script>

<style scoped>
img {
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.51);
}

#sortedTeams {
    display: flex;
    justify-content: center;
    align-items: center;
}

#team1 {
    padding: 20px;
    display: grid;
    align-self: self-start;
}

.blueTeam {
    color: #ffffff;
    font-weight: bold;
    margin-left: 5px;
    padding: 5px;
}

#blueTeamParticipants {
    display: flex;
    justify-self: end;
    justify-content: end;
    background-color: #001747d8;
    width: 50%;
    border-radius: 0px 0px 10px 10px;
}

#blueTeamChampions {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: end;
    background-color: #0051ff4b;
    color: aliceblue;
    min-width: 50px;
    gap: 10px;
    padding: 10px;
    border-radius: 10px 10px 0px 10px;
}

#team2 {
    padding: 20px;
    display: grid;
    align-self: self-end;
}

.redTeam {
    color: #ffffff;
    font-weight: bold;
    margin-left: 5px;
    padding: 5px;
}

#redTeamParticipants {
    display: flex;
    background-color: #420000d8;
    width: 50%;
    border-radius: 10px 10px 0px 0px;
}

#redTeamChampions {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    background-color: #ff00004b;
    color: aliceblue;
    min-width: 1000px;
    gap: 10px;
    padding: 10px;
    border-radius: 0px 10px 10px 10px;
}

/*
#teste {
    display: grid;
    flex-wrap: wrap;
    align-content: space-between;
    width: 200px;
    margin-top: 28px;
}
*/

#buttonNewSweepstake {
    position: absolute;
    top: 54.7%;
    left: 50.1%;
    transform: translate(-50%, -50%);
    font-family: 'Belanosima', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 400px;
    height: 90px;
    background-color: #fff98a20;
    box-shadow: 1px 1px 10px 1px inset #ffffff;
    border-radius: 45px;
    transition: 800ms;
    border-color: aliceblue;
}

#buttonNewSweepstake:hover {
    background-color: #fbff0320;
    border-color: #dfdfdf;
    box-shadow: 1px 1px 10px 5px inset #fff98ad0;
}

#teamGenerate {
    background-color: rgb(112, 112, 112);
}

#teams {
    display: grid;
    width: 1280px;
    height: 800px;
    color: aliceblue;
    background-image: url("https://pbs.twimg.com/media/CBH_Bm2UwAAqQaR.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1280px 820px;
}

#allParticipants {
    margin-top: 28px;
    color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 5px;
}
</style>