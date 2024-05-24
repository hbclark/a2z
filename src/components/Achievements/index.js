import CountUp from 'react-countup';

export default function Achievements(){
    const achievements = [
        {id:1,number:1000,text:"Happy Clients", },
        {id:2,number:100,text:"Projects Completed"},
        
        {id:3,number:100,text:"Awards Won"}
    ]



    return(
        <div>
          {achievements.map((achievement,index)=>(
          
            <div className="text-center" key={achievement.id}>
                <CountUp end={achievement.number} duration={2} />
                <p>{achievement.text}</p>

          </div>
        
        ))

        }

                
        </div>
    )
}