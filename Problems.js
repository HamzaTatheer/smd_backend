class Problems{

    constructor(){
        this.problems = [
            {name:"Excercise",posts:[{question:"how to stay motivated",answer:"Think positive"}]}
        ];
    }

    getAllProblems(){
        let arr = this.problems.map((val)=>val.name);
        return arr;
    }

    getPostsOfProblem(problem_name){

        let problem = this.problems.find((x)=>x.name.toLowerCase()===problem_name.toLowerCase());

        if(problem === undefined)
            return [];

        return problem.posts;
    }

    addPostToProblem(problem_name,question,answer){
        let problem = this.problems.find((x)=>x.name.toLowerCase()===problem_name.toLowerCase());
        
        if(problem !== undefined)
            problem.posts.push({question,answer});
    }

}


module.exports = Problems;











