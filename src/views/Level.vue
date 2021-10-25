<script>
import { v4 as uuidv4 } from "uuid";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button";
import LevelList from "@/components/LevelList";

export default {
  components: {
    Button,
    LevelList,
  },
  setup() {
    const store = useStore();
    let newLevel = {};
    const name = ref("");
    const isEdit = ref(false);
    const save = () => {
      store.dispatch("levels/addLevel", { id: uuidv4(), name: name.value });
      name.value = "";
    };

    const edit = () => {
      store.dispatch("levels/editLevel", { id: newLevel.id, name: name.value });
      name.value = "";
    };

    const updateName = (level) => {
      newLevel = level;
      name.value = level.name;
      isEdit.value = true;
    };

    watch(name, () => {
      if (name.value == "" && isEdit.value) isEdit.value = false;
    });

    return {
      name,
      save,
      updateName,
      isEdit,
      edit
    };
  },
};
</script>

<template>
  <form @submit.prevent class="level-form">
    <input type="text" placeholder="Level" v-model="name" />
    <Button
      v-if="!isEdit"
      :disabled="name == '' ? true : false"
      @buttonClick="save"
      name="Save"
      class="btn--save"
    />
    <Button
      v-else
      :disabled="name == '' ? true : false"
      @buttonClick="edit"
      name="Edit"
      class="btn--edit"
    />
  </form>
  <LevelList @updateName="updateName" />
</template>
