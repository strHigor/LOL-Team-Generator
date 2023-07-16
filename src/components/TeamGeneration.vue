<template>
    <NewSweepstake v-if="showNewSweepstake" ref="newSweepstake" @Sweepstake="sweepstake"
        @CloseNewSweepstake="closeNewSweepstake" />
    <div id="sortedTeams">
        <div id="teams">
            <div id="team1" v-if="champions.length > 0 && teams.length > 0">
                <div id="blueTeamChampions">
                    <div v-for="champion in champions[0]">
                        <img v-bind:src="'../../../public/images/' + champion + '.png'"
                            width="100" height="100">
                        <div id="champion">
                            <h5> {{ champion }} </h5>
                        </div>
                    </div>
                </div>

                <div id="blueTeamParticipants">
                    <div class="blueTeam" v-for="participant in teams[0]">
                        <h5>{{ participant.toUpperCase() }}</h5>
                    </div>
                </div>
            </div>

            
            <div id="team2" v-if="champions.length > 0 && teams.length > 0">
                <div id="redTeamParticipants">
                    <div class="redTeam" v-for="participant in teams[1]">
                        <h5> {{ participant.toUpperCase() }} </h5>
                    </div>
                </div>

                <div id="redTeamChampions">
                    <div v-for="champion in champions[1]">
                        <img v-bind:src="'../../../public/images/' + champion + '.png'"
                            width="100" height="100">
                        <div id="champion">
                            <h5> {{ champion }} </h5>
                        </div>
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

        closeNewSweepstake(visible) {
            this.showNewSweepstake = visible;
        }
    },
    mounted() {
        this.showNewSweepstake = true;
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Lol Fonte';
    src: url('../fonts/Friz Quadrata Regular.ttf') format('truetype'),
        url('../fonts/Friz Quadrata Std Medium.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

h5 {
    font-family: 'Lol Fonte', monospace;
    font-weight: normal;
    color: #fdd54d;
    text-shadow: 2px 0 #60542c, -2px 0 #60542c, 0 2px #60542c, 0 -2px #60542c,
        1px 1px #60542c, -1px -1px #60542c, 1px -1px #60542c, -1px 1px #60542c;
}

img {
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.51);
}

#champion {
    background-color: #a17e3f;
    text-align: center;
    border-radius: 0px 0px 3px 3px;
    border: solid 1px #202020;
    margin-top: -7px;
    box-shadow: inset 0px 0px 10px 6px rgba(0, 0, 0, 0.89);
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
    font-size: 20px;
    margin-left: 5px;
    padding: 5px;
}

#blueTeamParticipants {
    display: flex;
    justify-self: end;
    justify-content: center;
    background-color: #a17f3fd0;
    width: 50%;
    border-radius: 0px 0px 10px 10px;
    border: solid 1px #0c0c0c;
    box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.89);
    margin-top: -1px;
}

#blueTeamChampions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #0051ff4b;
    box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.89);
    border-radius: 4px 4px 0px 4px;
    border: solid 1px #0c0c0c;
    color: aliceblue;
    min-width: 50px;
    gap: 10px;
    padding: 10px;
}

#team2 {
    padding: 20px;
    display: grid;
    align-self: self-end;
}

.redTeam {
    color: #ffffff;
    font-size: 20px;
    margin-left: 5px;
    padding: 5px;
}

#redTeamParticipants {
    display: flex;
    width: 50%;
    border-radius: 10px 10px 0px 0px;
    justify-content: center;
    background-color: #a17f3fd0;
    border: solid 1px #0c0c0c;
    box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.89);
}

#redTeamChampions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ff00004b;
    box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.89);
    border-radius: 4px 4px 0px 4px;
    border: solid 1px #0c0c0c;
    color: aliceblue;
    min-width: 1000px;
    gap: 10px;
    padding: 10px;
    margin-top: -1px;
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