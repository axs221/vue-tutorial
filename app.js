Vue.component('todo-item', {
  props: ['event', 'deleteevent'],
  template: `
    <a href="#">
      <h4 class="list-group-item-heading">
        <i class="glyphicon glyphicon-bullhorn"></i> 
        {{ event.name }}
      </h4>

      <h5>
        <i class="glyphicon glyphicon-calendar" v-if="event.date"></i> 
        {{ event.date }}
      </h5>

      <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

      <button class="btn btn-xs btn-danger" @click="deleteevent(event.index)">Delete</button>
    </a>
  `
})
new Vue({
  el: '#events',
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },
  created: function() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      this.events.push(...events);
    },

    addEvent: function() {
      if (this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteevent: function(index) {
      this.events.splice(index, 1);
    }
  }
})

