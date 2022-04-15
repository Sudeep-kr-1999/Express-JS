const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../route controller/people');


// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)


// the above way of routing can also be done like below discussed , we can chain multiple functionality wrt one endpoint in a line like done
// below 
router.route('/').get(getPeople).post(createPerson);
router.route('postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;