import useWindowSize from './useWindowSize'

const useDevice = ({
  mobileMaxWidth = 640,
  tabletMaxWidth = 1280,
}: DeviceConfig = {}): DeviceType => {
  const { width } = useWindowSize()

  if (width < mobileMaxWidth) {
    return 'mobile'
  } else if (width <= tabletMaxWidth) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}

export default useDevice

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

type DeviceConfig = {
  mobileMaxWidth?: number
  tabletMaxWidth?: number
}
