<template>
    <div id="principal">
        <div id="nome">
            <h3> {{ name }} </h3>
        </div>
        <div id="botao">
            <button @click="$emit('submitRemove', name)"> Remover </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
});
defineEmits(['submitRemove']);

</script>

<style scoped>
h3 {
    color: #212121;
}

#principal {
    display: flex;
    font-family: 'Belanosima', sans-serif;
    font-size: 14px;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    border-color: #5c65c9;
    box-shadow: 0px 0px 1px 1px #212121;
    background-color: #e8f0fe;
}

#nome {
    width: 80%;
}

#botao {
    display: flex;
    justify-content: right;
    width: 20%;
}
</style>