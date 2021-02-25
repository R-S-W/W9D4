
class FollowToggle{
    constructor(el, params){
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('follow-state');
        this.render;
    }

}

module.exports = FollowToggle;

