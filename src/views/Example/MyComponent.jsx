import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
// const [name,setName] = useState("");
class MyComponent extends React.Component {

    state = {
        firstName: " ",
        lastName: " ",
        arrJobs : [
            { id: 'abcJob1', title: 'Deverlopers', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }

        ]

    }

    addNewJob = (job) => {
        console.log('check job from parent : ',job);
        // let currentJobs = this.state.arrJobs
        // currentJobs.push(job)
       this.setState({
        arrJobs: [...this.state.arrJobs,job]
        // arrJobs : currentJobs

       })
    }


    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs : currentJobs 
        })
    }

    

    render() {

        let name = 'Eric';


        return (
            <>
            <AddComponent
                addNewJob={this.addNewJob}
            />
                
                   
                    
                
                <ChildComponent
                    // name={this.state.firstName}
                    // age={'25'}
                    // address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />


            </>
        )

    }

}

export default MyComponent;