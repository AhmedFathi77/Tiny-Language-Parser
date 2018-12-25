

function Draw(ObjArray) {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagramDiv",{
          "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
          layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
          { angle: 90, layerSpacing: 35 })
  });

  // the template we defined earlier
  myDiagram.nodeTemplate =$(go.Node,
           "Horizontal",{ background: "#44CCFF" },
           $(go.TextBlock, "Default Text",
           { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
           new go.Binding("text", "name"))
  );

  var model = $(go.TreeModel);
  model.nodeDataArray = DataArray;
  myDiagram.model = model;
}
