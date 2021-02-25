
class FollowToggle{
    constructor(el, params){
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        console.log(this.followState);
        console.log(params);
        console.log("constructor");

        this.render();
        
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        
        let val;
        if (this.followState === 'unfollowed') {
            val = 'Follow!';
        } else if (this.followState === 'followed') {
            val = 'Unfollow!';
        }
        this.$el.html(val);
    }


    handleClick(event){
        event.preventDefault();
        if (this.followState === 'followed'){
            this.followState = 'unfollowed';


            
        }else if (this.followState === 'unfollowed'){
            this.followState = 'followed';
        }
        this.render();

    }

    const toggleFollow =  {
        unfollow: userId => toggleFollowStatus(userId, 'DELETE'),
        follow: userId =>  toggleFollowStatus(userId, 'POST'),
        toggleFollowStatus: (userId, method) => {
            $.Ajax({
                url: `/users/${userId}/follow`,
                dataType: 'json',
                method: method,
            });
        }
    };

}

module.exports = FollowToggle;
//


