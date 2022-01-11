const yargs = require('yargs')
const students = require('./students')

yargs.command({
    command:'add',
    describe:'Add Students',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        grades:{
            describe:'This is array of grades description in add command',
            demandOption:true,
            type:'array',
        }
    },
    handler:(x)=>{
        students.addStudent(x.id,x.name,x.grades)
    }
})



yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        id:{
            describe:'This is title description in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        students.deleteStudent(x.id)
    }
})


// listAll
yargs.command({
    command:"list",
    describe:'List notes',
    handler:()=>{
        students.listStudents()
    }
})

// show
yargs.command({
    command:'show',
    describe:'Read notes',
    builder:{
    id:{
        describe:'This is title in read command',
        demandOption:true,
        type:'number'
    }
    },
    handler:(x)=>{
        students.showStudent(x.id)
    }
})

yargs.parse()