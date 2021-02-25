
class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('follow-state');
        this.render();
    }

    render() {
        let val;
        if (this.followState === 'unfollowed') {
            val = 'Follow!';
        } else if (this.followState === 'followed') {
            val = 'Unfollow!';
        }
        this.$el.val(val);
    }
}

module.exports = FollowToggle;

