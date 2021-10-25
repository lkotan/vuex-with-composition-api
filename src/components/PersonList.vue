<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button";
export default {
  components: {
    Button,
  },
  setup() {
    const store = useStore();
    const persons = computed(() => store.getters["persons/getPersons"]);
    const remove = (id) => store.dispatch("persons/deletePerson", id);

    return {
      persons,
      remove,
    };
  },
};
</script>

<template>
  <section>
    <div class="person" v-for="person in persons" :key="person.id">
      <header>
        <h1>{{ person.name }}</h1>
        <h3>{{ person.email }}</h3>
      </header>
      <main>
        <p>{{ person.team }}</p>
        <p>{{ person.level }}</p>
      </main>
      <footer>
        <Button
          class="btn--edit"
          name="Edit"
          @buttonClick="$router.push(`/person/${person.id}`)"
        />
        <Button
          class="btn--delete"
          name="Delete"
          @buttonClick="remove(person.id)"
        />
      </footer>
    </div>
  </section>
</template>
