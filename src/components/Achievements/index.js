"use client"
import CountUp from 'react-countup';
import {motion} from 'framer-motion';



export default function Achievements(){
    const achievements = [
        {id:1,number:23432,text:"Happy Clients", },
        {id:2,number:96,text:"Projects Completed"},
        
        {id:3,number:93,text:"Awards Won"}
    ]

    const fadeInOutAnimationVariant = {
        initial:{opacity:0,y:100},
        animate:(i)=>(
            {opacity:1,y:0,transition:{
                duration:0.5,
                ease:"easeInOut",
                delay:i*0.3}}
        )
    }


    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-96 py-4 lg:py-20 bg-retroBlue-700 text-white">
          {achievements.map((achievement,index)=>(
          
            <motion.div className="" key={achievement.id}
                variants = {fadeInOutAnimationVariant}
                initial = "initial"
                whileInView = "animate"
                custom = {index}
            >
                <p className="text-3xl font-bold mb-4"> <CountUp end={achievement.number} delay ={1.5} duration={2} /></p>
               
                <p>{achievement.text}</p>

          </motion.div>
        
        ))

        }

                
        </div>
    )
}