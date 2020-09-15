module.exports = async function (context, req) {
    context.log('Returning a list of dogs');

    context.res = {
        // status: 200, /* Defaults to 200 */
        // body is the payload of what we return
        body: {
            // add a property called dogs with our array
            dogs: [
                { name: 'Azure' },
                { name: 'Sammy' },
                { name: 'Roscoe' }
            ]
        },
        // flag the content type as JSON
        header: {
            'Content-Type': 'application/json'
        }
    };
}
