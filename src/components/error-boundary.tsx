import React, { ReactNode } from 'react'
import { Cache } from 'swr'

import { API_ROUTE } from '../constant'
import SkeletonLoading from '../components/skeleton-loading'

import './ErrorBoundary.css'

interface SWR Cache<Data> {
  get(key: string): Data | undefined
  set(key: string, value: Data): void
  delete(key: string): void
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  handleClick = (): void => {
    Cache.delete(API_ROUTE)
    Cache.delete(`err@${API_ROUTE}`)
    this.setState({ hasError: false })
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (!hasError) {
      return children
    }

    return (
      <div className="ProfileErrorBoundary" onClick={this.handleClick}>
        <div className="info">
          <ConfusedIcon />
          <p>Something Went Wrong</p>
          <p>Click to retry</p>
        </div>
        <SkeletonLoading />
      </div>
    )
  }
}

export default ErrorBoundary 

const ConfusedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 512 512"
  >
    <path d="M216 381h80c5.523 0 10-4.477 10-10s-4.477-10-10-10h-80c-5.523 0-10 4.477-10 10s4.477 10 10 10zM193.702 120.562c-1.34-5.358-6.77-8.615-12.127-7.276l-80 20c-5.358 1.34-8.616 6.769-7.276 12.127 1.136 4.544 5.213 7.577 9.694 7.577.803 0 1.619-.098 2.433-.301l80-20c5.357-1.34 8.615-6.769 7.276-12.127zM410.425 133.286l-80-20c-5.359-1.337-10.787 1.917-12.127 7.276-1.339 5.358 1.918 10.787 7.276 12.127l80 20c.814.203 1.63.301 2.433.301 4.48 0 8.558-3.033 9.694-7.577 1.34-5.358-1.918-10.787-7.276-12.127z" />
    <path d="M506.67 204.422c-9.677-46.571-32.233-90.29-65.212-124.946C393.487 29.066 325.548 0 256.001 0 185.55 0 116.773 29.851 68.715 81.417 24.883 128.448 0 191.721 0 255.988c0 64.981 25.461 128.943 70.176 176.126C118.138 482.723 186.327 512 256.02 512c29.11 0 57.67-4.85 84.9-14.421 26.33-9.261 50.84-22.712 72.87-39.982a9.957 9.957 0 003.76-6.671c.32-2.65-.41-5.27-2.06-7.37a9.945 9.945 0 00-7.87-3.83c-2.26 0-4.39.74-6.16 2.13-41.87 32.801-92.16 50.143-145.46 50.143-63.02 0-122.29-24.552-166.88-69.123C44.55 378.284 20 319.011 20 255.988S44.55 133.692 89.12 89.1C133.71 44.527 192.98 19.976 256 19.976S378.29 44.527 422.88 89.1c44.57 44.592 69.11 103.855 69.12 166.888 0 42.932-11.64 84.964-33.66 121.546-2.84 4.72-1.32 10.88 3.41 13.731 1.56.93 3.34 1.43 5.15 1.43 3.54 0 6.75-1.81 8.57-4.84a254.317 254.317 0 0026.96-62.303c6.35-22.541 9.57-45.943 9.57-69.563 0-17.368-1.816-34.656-5.33-51.567z" />
    <circle cx="440.321" cy="418.908" r="10" />
    <path d="M204 200c0-22.056-17.944-40-40-40s-40 17.944-40 40 17.944 40 40 40 40-17.944 40-40zm-60 0c0-11.028 8.972-20 20-20s20 8.972 20 20-8.972 20-20 20-20-8.972-20-20zM388 200c0-22.056-17.944-40-40-40s-40 17.944-40 40 17.944 40 40 40 40-17.944 40-40zm-60 0c0-11.028 8.972-20 20-20s20 8.972 20 20-8.972 20-20 20-20-8.972-20-20z" />
  </svg>
)