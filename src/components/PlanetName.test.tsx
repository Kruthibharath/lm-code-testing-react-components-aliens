import { render } from "@testing-library/react"
import { PlanetName } from "./PlanetName"

describe("Planet Component",()=>{
    test("component renders without fail",()=>{
        render(<PlanetName planetName={} onChangePlanetName={()=>{}})
    })
})