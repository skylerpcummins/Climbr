# Phase 3: Areas and Tags (2-3 days)

## Rails
### Models
* Area
* Tag
* Tagging

### Controllers
* Api::AreasController (create, destroy, index, show, update)

### Views
* areas/index.json.jbuilder
* areas/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* AreasIndex
  - AreaIndexItem
  - AreaDetail
* AreaForm

### Stores
* Area

### Actions
* ApiActions.receiveAllAreas -> triggered by ApiUtil
* ApiActions.receiveSingleArea
* ApiActions.deleteArea
* AreaActions.fetchAllAreas -> triggers ApiUtil
* AreaActions.fetchSingleArea
* AreaActions.createArea
* AreaActions.editArea
* AreaActions.destroyArea

### ApiUtil
* ApiUtil.fetchAllAreas
* ApiUtil.fetchSingleArea
* ApiUtil.createArea
* ApiUtil.editArea
* ApiUtil.destroyArea

## Gems/Libraries
