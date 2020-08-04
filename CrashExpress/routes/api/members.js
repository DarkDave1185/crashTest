//**ROUTES - API**//(cleaned up syntax)
const express = require(`express`);
const uuid = require(`uuid`);
const router = express.Router();
const members = require("../../Members");

//**GETS ALL MEMBERS**//
router.get('/', (c, d) => d.json(members));

//**GETS SINGLE MEMBER**//
router.get('/:id', (c, d) => {
    const found = members.some(member => member.id === parseInt(c.params.id));
    if (found) {
        d.json(members.filter(member => member.id === parseInt(c.params.id)));
    } else {
        d.status(400).json({ msg: `Member: ${c.params.id} Request Invalid` })
    }
});

//**CREATE MEMBER**//
router.post(`/`, (c, d) => {
    const newMember = {
        id: uuid.v4(),
        name: c.body.name,
        age: c.body.age,
        status: `alive`
    }
    if (!newMember.name || !newMember.age) {
        d.status(400).json({ msg: `Name and Age are required` })
    }
    members.push(newMember);
    d.json(members);
});

//**UPDATE MEMBER**//
router.put('/:id', (c, d) => {
    const found = members.some(member => member.id === parseInt(c.params.id));
    if (found) {
        const updatedMember = c.body;
        members.forEach(member => {
            if (member.id === parseInt(c.body.id)) {
                member.name = updatedMember.name ? updatedMember.name : member.name;
                member.age = updatedMember.age ? updatedMember.age : member.age;
                d.json({ msg: `Member Information Updated`, member: member });
            }
        });
    } else {
        d.status(400).json({ msg: `Member: ${c.params.id} Request Invalid` })
    }
    d.end();
});

module.exports = router;