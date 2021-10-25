<script>
import { reactive, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const person = reactive({
      id: 0,
      name: "",
      email: "",
      team: "",
      level: "",
    });
    const teams = computed(() => store.getters["teams/getTeams"]);
    const levels = computed(() => store.getters["levels/getLevels"]);
    const editPerson = computed(() =>
      store.getters["persons/getPerson"](route.params.id)
    );
    const disabledControl = computed(() => {
      let field = Object.keys(person).filter((x) => person[x] == "");
      if(route.params.id) return field.length == 0 ? false : true;
      return field.length == 1 ? false : true;
    });
    const onSubmit = () => {
      person.id = uuidv4();
      store.dispatch("persons/addPerson", person);
      router.push("/");
    };

    const updateLevel = (level) => (person.level = level);
    const updateTeam = (team) => (person.team = team);
    if (route.params.id) {
      person.name = editPerson.value.name;
      person.email = editPerson.value.email;
      person.id = editPerson.value.id;
      updateLevel(editPerson.value.level);
      updateTeam(editPerson.value.team);
    }
    const update = () => {
      store.dispatch("persons/editPerson", person);
      router.push("/");
    };

    return {
      person,
      onSubmit,
      teams,
      levels,
      updateLevel,
      updateTeam,
      editPerson,
      update,
      disabledControl,
    };
  },
};
</script>

<template>
  <form @submit.prevent class="person-form">
    <div class="person-form__input">
      <input type="text" autofocus v-model="person.name" required />
      <span>Name</span>
    </div>
    <div class="person-form__input">
      <input type="text" required v-model="person.email" />
      <span>Email</span>
    </div>
    <div class="person-form__select">
      <select @change="updateLevel($event.target.value)">
        <option selected disabled>Please select level</option>
        <option
          v-for="item in levels"
          :key="item.id"
          :selected="editPerson ? item.name == editPerson.level : false"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="person-form__select">
      <select @change="updateTeam($event.target.value)">
        <option selected disabled>Please select team</option>
        <option
          v-for="item in teams"
          :key="item.id"
          :selected="editPerson ? item.name == editPerson.team : false"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <footer class="person-form__buttons">
      <Button
        v-if="!$route.params.id"
        :disabled="disabledControl"
        name="Save"
        class="btn--save"
        @buttonClick="onSubmit"
      />
      <Button
        v-else
        :disabled="disabledControl"
        name="Update"
        class="btn--update"
        @buttonClick="update"
      />
      <Button
        @buttonClick="$router.push('/')"
        name="Cancel"
        class="btn--cancel"
      />
    </footer>
  </form>
</template>
