export default function optionRows({optRow}) {

  return (
    <>
    {
      optRow.map((opts, optsIndex) => {
        return (
          <input
          key={optsIndex}
          placeholder="Enter option name"
          className="text-gray-600 w-full py-3 pl-2 bg-gray-100	rounded-xl outline-none mt-1 mb-4 text-sm"
        />
        )
      })
  }
  </>
  )
}