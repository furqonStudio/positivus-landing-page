import React from 'react'

type LabelLinkProps = {
  text: string
  color: string
}

const LabelLink: React.FC<LabelLinkProps> = ({ text, color }) => {
  const colorClassName = (() => {
    switch (color) {
      case 'white':
        return '#FFFFFF'
      case 'black':
        return '#191A23'
      case 'green':
      default:
        return '#B9FF66'
    }
  })()
  return (
    <div className="flex flex-row gap-4 items-center">
      <p className={`font-space text-xl`} style={{ color: colorClassName }}>
        {text}
      </p>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25005 13.7009C0.532613 14.1151 0.2868 15.0325 0.701013 15.75C1.11523 16.4674 2.03261 16.7132 2.75005 16.299L1.25005 13.7009ZM20.7694 5.38818C20.9839 4.58798 20.509 3.76548 19.7088 3.55107L6.66879 0.0570085C5.86859 -0.157404 5.04608 0.31747 4.83167 1.11767C4.61726 1.91787 5.09213 2.74037 5.89233 2.95479L17.4834 6.06061L14.3776 17.6517C14.1632 18.4519 14.6381 19.2744 15.4383 19.4888C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38818ZM2.75005 16.299L20.0706 6.29899L18.5706 3.70092L1.25005 13.7009L2.75005 16.299Z"
          fill={colorClassName}
        />
      </svg>
    </div>
  )
}

export default LabelLink
