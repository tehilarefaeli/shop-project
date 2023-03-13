const express = require('express');
const mongoose = require('mongoose');

const http_server = express()
http_server.use(express.json())
http_server.use(express.static(__dirname))

http_server.get('/', (req, res) => {
    res.sendFile(__dirname + '/shop.html')
})

http_server.get('/branches', async (req, res) => {
    res.send(await getbranches());
})


http_server.get('/jewelry', async (req, res) => {
    res.send(await getjewels());
})

http_server.post('/insertbranch', (req, res) => {
    add_branch_to_db(req.body)
    res.end()
})


http_server.post('/insertjewels', (req, res) => {
    add_jewelry_to_db(req.body)
    res.end()
})

http_server.post('/insertmanager', (req, res) => {
    add_manager_to_db(req.body)
    res.end()
})
http_server.listen(8080)

mongoose.connect('mongodb://127.0.0.1:27017/shop', { useUnifiedTopology: true });
mongoose.set({ strictQuery: false })
const db = mongoose.connection;
db.on('eroro', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('connection open');
});


const managers = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String

});

const manager = mongoose.model('manager', managers);
const manager1 = new manager({ first_name: 'Moshe', last_name: 'Cohen', email: 'moshec@shop.com', password: 'm1o2s3h4e5' });
manager1.save();


const branches = new mongoose.Schema({
    id: Number,
    city: String,
    street: String,
    phone: String,
    opening_hours: String,
    email: String
});




const jewelry = new mongoose.Schema({
    name: String,
    cost: Number,
    img: String,
    category: String,
    color: String,
    branch: Array
});
let jewel;
let branch;

async function init() {
    jewel = mongoose.model('jewel', jewelry);
    await jewel.deleteMany({})

    branch = mongoose.model('branch', branches);

    if ((await getbranches()).length == 0) {
        const branc1 = new branch({ id: '1', city: 'bnei brak', street: 'Ezra 12', phone: '035797654', opening_hours: '10:00-21:00', email: 'shopbb@shop.com' });
        const branc2 = new branch({ id: '2', city: 'jerusalem', street: 'Neria 35', phone: '025797653', opening_hours: '10:00-21:00', email: 'shopjr@shop.com' });
        branc1.save()
        branc2.save()
    }



    const ring1 = new jewel({ name: 'star ring', cost: '190', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/198492C01_1661157706469-270x270.png', category: 'rings', color: 'silver', branch: ['1', '2'] });
    const ring2 = new jewel({ name: 'Red heart ring', cost: '150', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/199267C01_1661238296938-270x270.png', category: 'rings', color: 'red', branch: ['1', '2'] });
    const ring3 = new jewel({ name: 'Classic ring', cost: '419', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/196250CZ_1661070288648-390x418.png.webp', category: 'rings', color: 'silver', branch: ['1', '2'] });
    const ring4 = new jewel({ name: 'wide ring', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/198676C01-390x418.png.webp', category: 'rings', color: 'silver', branch: ['1', '2'] });
    const ring5 = new jewel({ name: 'flower ring', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/190786C01_1673880218870-390x418.png.webp', category: 'rings', color: 'silver', branch: ['1', '2'] });
    ring1.save()
    ring2.save()
    ring3.save()
    ring4.save()
    ring5.save()




    const bracelet1 = new jewel({ name: 'Link bracelet', cost: '300', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver', branch: ['1', '2'] });
    const bracelet2 = new jewel({ name: 'fabric bracelet', cost: '140', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590749CPE_1661070689604-390x418.png.webp', category: 'bracelet', color: 'purple', branch: ['1', '2'] });
    const bracelet3 = new jewel({ name: 'Bracelet with heart clasp', cost: '779', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/582257C00_1666247896015-390x418.png.webp', category: 'bracelet', color: 'gold', branch: ['1', '2'] });
    const bracelet4 = new jewel({ name: 'Link bracelet', cost: '379', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/599588C00_1660830045367-390x418.png.webp', category: 'bracelet', color: 'silver', branch: ['1', '2'] });
    const bracelet5 = new jewel({ name: 'Black leather bracelet', cost: '259', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590745CBK_1661328859824-390x418.png.webp', category: 'bracelet', color: 'black', branch: ['1', '2'] });
    bracelet1.save()
    bracelet2.save()
    bracelet3.save()
    bracelet4.save()
    bracelet5.save()


    const earring1 = new jewel({ name: 'Snowflake earrings', cost: '190', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/10/292370C01_1666742577770.png', category: 'earring', color: 'silver', branch: ['1', '2'] });
    const earring2 = new jewel({ name: 'Star earrings', cost: '285', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/10/262375C01_1666742512800-390x418.png.webp', category: 'earring', color: 'gold', branch: ['1', '2'] });
    const earring3 = new jewel({ name: 'Blue stone earrings', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/290040C01_ABC123_MODEL_eCOM_01_RGB-1.jpg.webp', category: 'earring', color: 'blue', branch: ['1', '2'] });
    const earring4 = new jewel({ name: 'hoop earrings', cost: '285', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/289532C00-390x418.png.webp', category: 'earring', color: 'gold', branch: ['1', '2'] });
    const earring5 = new jewel({ name: 'flower earrings', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/280781C01_1673880334586-390x418.png.webp', category: 'earring', color: 'purple', branch: ['1', '2'] });
    earring1.save()
    earring2.save()
    earring3.save()
    earring4.save()
    earring5.save()


    const necklace1 = new jewel({ name: 'infinity necklace', cost: '335', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/398821C01.png', category: 'necklace', color: 'silver', branch: ['1', '2'] });
    const necklace2 = new jewel({ name: 'Blue pendant necklace', cost: '425', img: 'https://pandorail.b-cdn.net/wp-content/uploads/2022/08/390055C01.png', category: 'necklace', color: 'blue', branch: ['1', '2'] });
    const necklace3 = new jewel({ name: 'Heart necklace', cost: '469', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/590534CZ-390x418.png.webp', category: 'necklace', color: 'silver', branch: ['1', '2'] });
    const necklace4 = new jewel({ name: 'Circle pendant necklace', cost: '599', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/389483C01-390x418.png.webp', category: 'necklace', color: 'silver', branch: ['1', '2'] });
    const necklace5 = new jewel({ name: 'Necklace of links and pearls', cost: '820', img: 'https://pandorail.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/09/362302C01_1663891294083-390x418.png.webp', category: 'necklace', color: 'gold', branch: ['1', '2'] });
    necklace1.save()
    necklace2.save()
    necklace3.save()
    necklace4.save()
    necklace5.save()

}

init();

function add_jewelry_to_db(data) {
    const name = new jewel({ name: data.name, cost: data.cost, img: data.img, category: data.category, color: data.color, branch: data.branch });
    name.save()
}

function add_branch_to_db(data) {
    const name = new branch({ city: data.city, street: data.street, phone: data.phone, opening_hours: data.opening_hours, email: data.email, branch: data.branch });
    name.save()
}

function add_manager_to_db(data) {
    const name = new manager({ first_name: data.first_name, last_name: data.last_name, email: data.email, password: data.password });
    name.save()
}

async function getbranches() {
    return await branch.find();
}
async function getjewels() {
    return await jewel.find();
}
