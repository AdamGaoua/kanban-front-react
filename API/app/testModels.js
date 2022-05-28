const { List } = require('./models/index');


const run = async () => {
    try {

        const lists = await List.findAll({
            include: [
                {
                    association: 'cardsList',
                    include: [{
                        association: 'tagsList'
                    }]
                }
            ]
        });

        // On peut tester d'accéder aux différents niveaux d'associations
        //  qu'on a demandé dans la requête
        console.log(lists[0].cardsList[0].tagsList);

    } catch(error) {
        console.trace(error);
    }
}

run();
