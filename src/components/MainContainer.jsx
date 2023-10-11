import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCategoryId(0));
  // },[]);
  return (
    <div className=''>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer