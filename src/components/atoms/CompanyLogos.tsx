import React from 'react'

const CompanyLogos: React.FC = () => {
  const logoCount = 6 // Jumlah logo yang ingin ditampilkan
  const logos = Array.from({ length: logoCount }, (_, i) => (
    <img
      key={i}
      src={`/src/assets/company-logos/company-logo-${i + 1}.png`}
      alt={`Company Logo ${i + 1}`}
      width={126}
      className="grayscale"
    />
  ))

  return (
    <div className="flex flex-row gap-9 lg:gap-24 overflow-hidden">{logos}</div>
  )
}

export default CompanyLogos
