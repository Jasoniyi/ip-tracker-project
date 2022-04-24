import React from 'react'

const IpDisplay = ({ data  }) => {
    const {
        ip =  '',
        isp = '',
        location : { region, timezone } = {},
    } = data
    const getRegion = ip ? `${region}` : ''
    const getTimezone = timezone ? `${timezone}` : ''
      
  return (
      <div className="flex justify-center z-10 absolute top-0 left-2/4 mt-6">
        <div className="w-72 space-y-10 md:w-auto bg-white md:-mt-20 -mt-28 rounded-md p-6 flex flex-col items-center md:flex-row justify-between absolute md:space-y-0">
            <div className="flex flex-col items-center md:items-start md:border-r-2 md:border-r-zinc-200 md:px-6 md:w-64">
                <span className="text-base text-gray-400">IP address</span>
                <span className="text-2xl">{data.ip}</span>
            </div>
            <div className="flex flex-col items-center md:items-start md:border-r-2 md:border-r-zinc-200 md:px-6 md:w-64">
                <span className="text-base text-gray-400">location</span>
                {/* <span className="text-2xl">{data.location.region}</span> */}
                <span className="text-2xl">{getRegion}</span>
            </div>
            <div className="flex flex-col items-center md:items-start md:border-r-2 md:border-r-zinc-200 md:px-6 md:w-64">
                <span className="text-base text-gray-400">Timezone</span>
                {/* <span className="text-2xl tracking-normal">UTC  {data.location.timezone}</span> */}
                <span className="text-2xl tracking-normal">UTC  {getTimezone}</span>
            </div>
            <div className="flex flex-col items-center md:items-start md:px-6 md:w-80">
                <span className="text-base text-gray-400">Isp</span>
                {/* <span className="text-2xl tracking-normal leading-normal">{data.isp}</span> */}
                <span className="text-2xl tracking-normal leading-normal">{isp}</span>
            </div>
        </div>
    </div>
  )
}

export default IpDisplay