import Route from '@ember/routing/route';

export default Route.extend({
    currentRobot: null,
    init: {
        x: 0,
        y: 0,
        f: "north"
    }
});
