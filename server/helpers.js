// Helper Server Methods
 Meteor.methods({
    /**
     * Get wrapper call on the end an endpoint
     * @param  {[string]} url [url of endpoint]
     * @return {[json]}     [response of the getter]
     */
    getEndpoint: function (url) {
        this.unblock();
        return Meteor.http.call("GET", url);
    }
});
