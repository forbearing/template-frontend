// https://stackoverflow.com/questions/70901727/unclear-benefit-of-setloading-state-in-react-axios

// import { BallTriangle, DNA, InfinitySpin, LineWave, MutatingDots } from 'react-loader-spinner'
import './index.scss'

const AutoLoading: React.FC<{ children?: any }> = ({ children }) => {
  if (!children) {
    return <></>
  }
  return (
    <>
      {/* 这个是我自己的 */}
      <div id="asset-platform-loading" style={{ display: 'none' }}>
        <svg
          // t='1696204533211'
          className="icon loading"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7465"
          width="40"
          height="40"
        >
          <path
            d="M626.34496 121.8304c0 53.15072-43.07968 96.2304-96.2304 96.2304-53.1456 0-96.2304-43.07968-96.2304-96.2304C433.88928 68.67968 476.96896 25.6 530.11456 25.6c53.1456 0 96.2304 43.0848 96.2304 96.2304zM530.11456 833.9968c-46.50496 0-84.1984 37.69856-84.1984 84.1984s37.69856 84.1984 84.1984 84.1984 84.1984-37.69856 84.1984-84.1984-37.69344-84.1984-84.1984-84.1984z m398.18752-253.83936c-33.21856 0-60.14464-26.92096-60.14464-60.14464 0-33.21856 26.92608-60.14464 60.14464-60.14464 33.22368 0 60.14464 26.92608 60.14464 60.14464-0.00512 33.21856-26.9312 60.14464-60.14464 60.14464zM228.15744 520.0128c0-53.1456-43.07968-96.2304-96.2304-96.2304-53.1456 0-96.2304 43.07968-96.2304 96.2304 0 53.1456 43.07968 96.2304 96.2304 96.2304 53.15072 0 96.2304-43.0848 96.2304-96.2304z m88.448-349.59872c37.5808 37.5808 37.5808 98.5088 0 136.08448-37.5808 37.5808-98.5088 37.5808-136.0896 0s-37.5808-98.5088 0-136.0896 98.5088-37.5808 136.0896 0.00512z m444.03712 580.12672c-28.1856 28.1856-28.1856 73.8816-0.00512 102.0672 28.1856 28.1856 73.8816 28.1856 102.0672 0 28.1856-28.1856 28.1856-73.8816 0-102.0672-28.18048-28.19072-73.87648-28.19072-102.06208 0z m85.05856-478.06464c-18.7904 18.7904-49.25952 18.7904-68.03968 0-18.79552-18.79552-18.79552-49.25952 0-68.0448a48.09728 48.09728 0 0 1 68.03968 0c18.7904 18.7904 18.7904 49.25952 0 68.0448zM316.60544 733.52704c-37.5808-37.5808-98.5088-37.5808-136.0896 0s-37.5808 98.5088 0 136.08448c37.5808 37.5808 98.5088 37.5808 136.08448 0 37.5808-37.57568 37.5808-98.50368 0.00512-136.08448z"
            fill="#1677ff"
            p-id="7466"
          ></path>
        </svg>
      </div>

      {/* 这个是直接使用 ant design Spin 组件 */}
      {/* @ts-ignore */}
      {/* <Spin id="asset-platform-loading" size="default" className="asset-platform-loading" /> */}

      {/* <div id='asset-platform-loading' style={{ display: 'none' }}> */}
      {/* <BallTriangle height={40} width={40} radius={5} color='#4fa94d' ariaLabel='ball-triangle-loading' visible={true} /> */}
      {/* <DNA visible={true} height={60} width={60} ariaLabel='dna-loading' /> */}
      {/* <LineWave visible={true} height={80} width={80} color='#4fa94d' ariaLabel='line-wave-loading' /> */}
      {/* <InfinitySpin /> */}
      {/* <MutatingDots */}
      {/*     visible={true} */}
      {/*     width={100} */}
      {/*     height={100} */}
      {/*     color='#4fa94d' */}
      {/*     secondaryColor='#4fa94d' */}
      {/*     radius={12.5} */}
      {/*     ariaLabel='mutating-dots-loading' */}
      {/* /> */}
      {/* </div> */}
      {children}
    </>
  )
}

export default AutoLoading
