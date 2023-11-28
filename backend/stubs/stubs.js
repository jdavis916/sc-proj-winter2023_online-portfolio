const user = [
    {
        id: 1,
        email: 'abc@xyz.com',
        fname: 'Jane',
        lname: 'Doe',
        location: 'Flint, Michigan',
        occupation: 'Fast Coder',
        bio: 'friendly and simple',
        photo: 'public/inc/img/1to1ratio.png'
    }
];
const education = [
    {
        id: 1,
        name: 'CalState',
        major: 'bioengineering',
        minor: 'social studies',
        start_date: '11/28/90',
        end_date: '11/01/20'
    }
];
const jobs = [
    {
        id: 1,
        title: 'Custodian',
        start_date: '11/01/01',
        end_date: '05/09/03',
        description: 'Cleaning facility and maintaining safety through cleanliness',
        company_name: 'StateFund Janitorial Services'
    },
    {
        id: 2,
        title: 'Construction Worker',
        start_date: '01/12/04',
        end_date: '05/01/10',
        description: 'Building buildings with building materials',
        company_name: 'ABC Construction Org'
    },
    {
        id: 3,
        title: 'Bacteriologist',
        start_date: '09/03/11',
        end_date: '11/07/23',
        description: 'Studying and identifying new forms and varieties of bacterial',
        company_name: 'Private Research Bact Center'
    }
];
const interests = [
    {
        id: 1,
        name: 'education'
    },
    {
        id: 2,
        name: 'enconomic empowerment'
    },
    {
        id: 3,
        name: 'language'
    },
    {
        id: 4,
        name: 'puzzles'
    },
    {
        id: 5,
        name: 'instruments'
    }
];

module.exports = {
    user,
    jobs,
    education,
    interests
};