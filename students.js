const fs = require('fs')


const addStudent = (id,name,grades) => {
    const students = loadStudents()

    const duplicateId = students.find((student)=>{
        return student.id === id
    })

    let total = 0
    for(let grade of grades){
        total += grade
    }

    if(!duplicateId){
        students.push({ 
            id,
            name,
            grades,
            total
        })

        saveStudents(students)
        console.log('Student is saved successfuly')
    }
    else{
        console.log('Error duplicate id')
    }
}

const deleteStudent = (id)=>{
    const students = loadStudents()

    const studentsToKeep = students.filter((student)=>{

        return student.id !== id
    })


    if(students.length !== studentsToKeep.length){
        saveStudents(studentsToKeep)
        console.log('Student is removed')  
    }
    else {
        console.log('No Student is found with this id .. Please try again')
    }

}


const showStudent = (id) =>{
    const students = loadStudents()

    const student = students.find((student)=>{
        return student.id === id
    })

    if(student){
        console.log(student)
    }
    else{
        console.log('No Student with this id')
    }
}

const listStudents = () =>{
    const students = loadStudents()
    students.forEach((student)=>{
        console.log(student)
    })
}


const loadStudents = () =>{
    try{
        const data = fs.readFileSync('students.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveStudents = (students) =>{
    const data = JSON.stringify(students)
    fs.writeFileSync('students.json',data)
}


module.exports = {
    addStudent,
    deleteStudent,
    showStudent,
    listStudents
}
