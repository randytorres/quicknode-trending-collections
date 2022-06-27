import MaterialTable, { Column } from 'material-table'

const columnConfig: Column<Collection>[] = [
  { 
    title: 'Collection',
    field: 'name',
    render: (data: Collection) => (
      <div className="flex items-center">
        <img className="h-16 rounded-full" src={data?.unsafeOpenseaImageUrl} />
        <div className="flex flex-col	pl-6 ">
          <p>{data?.name}</p>
          <p>Circulating Supply: {data?.circulatingSupply}</p>
        </div>
      </div>
    )
  },
  { title: 'Sales Floor', field: 'floor' },
  { title: 'Sales Ceiling', field: 'ceiling' },
  { title: 'Total Sales', field: 'totalSales', type: 'numeric' },
]

interface Collection {
  unsafeOpenseaImageUrl: string
  name: string
  circulatingSupply: number
  floor: number
  ceiling: number
  totalSales: number
}

interface TrendingCollectionsProps {
  collections: Collection[]
}

export const TrendingCollections = (props: TrendingCollectionsProps) => {
  return (
    <div className="pt-10">
      <MaterialTable
        title="Trending Collections"
        data={props.collections}
        columns={columnConfig}
      />
    </div>
  )
}