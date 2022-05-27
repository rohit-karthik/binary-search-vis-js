<script>
    export let toUse;
    export let myMargin;
    export let iteNum;
</script>

<div>
    <p>{iteNum}</p>
    <div class="visualizer" style="--my-margin: {myMargin}">{toUse}</div>
</div>

<style>
    .visualizer {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10rem;
        background-color: transparent;
        border: black 10px solid;
        width: 7rem;
        height: 7rem;
        font-size: xx-large;
        margin-left: var(--my-margin);
    }
    div {
        display: flex;
        align-items: center;
        font-size: x-large;
    }
</style>
