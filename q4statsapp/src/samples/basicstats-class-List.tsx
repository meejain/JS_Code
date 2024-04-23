import {Component} from 'react'
import BasicstatsCard from './basicstats-class-Product';
import Basicstats from '../model/basicstats';

type Props={}

type AppState={
    basicstats:Basicstats[];
}
    
      
    export default class BasicstatsList extends Component<Props,AppState>{
     state={
        basicstats : [
            {id:1,"quarter":"Q1","initiative1":"AMS to Cloud Service",value1 : 8, initiative2:"CM Adoption", value2: 3, initiative3:"Renewals", value3: 25},
            {id:2,"quarter":"Q2","initiative1":"AMS to Cloud Service",value1 : 4, initiative2:"CM Adoption", value2: 2, initiative3:"Renewals", value3: 21},
            {id:3,"quarter":"Q3","initiative1":"AMS to Cloud Service",value1 : 4, initiative2:"CM Adoption", value2: 5, initiative3:"Renewals", value3: 11},
            {id:4,"quarter":"Q4","initiative1":"AMS to Cloud Service",value1 : 5, initiative2:"CM Adoption", value2: 1, initiative3:"Renewals", value3: 10},
    ]

        }
     deleteStats(id:number): void {
            let bsts = this.state.basicstats.filter(p => p.id !== id);
           // update the state and force re-render
          this.setState({
            basicstats: bsts
            })
     }
    render(){
    return <div>
        
        
    {    
    this.state.basicstats.map(p => <BasicstatsCard bts={p} 
    delEvent={(id)=> this.deleteStats(id)}
    />)
    }
    </div>
    }
}
