import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SelektonComponent = () => {
    return (
        <div className='container'>
        {
            [1,2,3,4,5,6,7,8,9].map(()=>{
                return (
                <  >
                    <SkeletonTheme color="#202020" highlightColor="#444" >
                        <Skeleton animation="wave" variant="rect" width={350} height={330} style={{margin:'1rem'}}/>
                    </SkeletonTheme>  
                        </>
                 )
            })
        }    
        </div>
    )
}

export default SelektonComponent
