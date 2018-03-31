var planJSON = '{"Nodes":[{"Id":"529","Name":"Test 1","Url":"","Type":1,"Color":2},{"Id":"532","Name":"Test 2","Url":"","Type":0,"Color":0},{"Id":"533","Name":"Test 3","Url":"","Type":0,"Color":0},{"Id":"534","Name":"Test 4","Url":"","Type":0,"Color":0},{"Id":"539","Name":"Test 5","Url":"","Type":0,"Color":0},{"Id":"551","Name":"Test 6","Url":"","Type":0,"Color":0},{"Id":"578","Name":"Test 7","Url":"","Type":5,"Color":5},{"Id":"579","Name":"Test 8","Url":"","Type":5,"Color":5},{"Id":"580","Name":"Test 9","Url":"","Type":5,"Color":5},{"Id":"568","Name":"Test 10","Url":"","Type":5,"Color":5},{"Id":"569","Name":"Test 11","Url":"","Type":5,"Color":5},{"Id":"570","Name":"Test 12","Url":"","Type":5,"Color":5},{"Id":"602","Name":"Test 13","Url":"","Type":5,"Color":5},{"Id":"603","Name":"Test 14","Url":"","Type":5,"Color":5},{"Id":"604","Name":"Test 15","Url":"","Type":5,"Color":5},{"Id":"606","Name":"Test 16","Url":"","Type":2,"Color":4},{"Id":"625","Name":"Test 17","Url":"","Type":5,"Color":5},{"Id":"626","Name":"Test 18","Url":"","Type":5,"Color":5},{"Id":"540","Name":"Test 19","Url":"","Type":0,"Color":0},{"Id":"586","Name":"Test 20","Url":"","Type":2,"Color":4},{"Id":"587","Name":"Test 21","Url":"","Type":2,"Color":4},{"Id":"544","Name":"Test 22","Url":"","Type":0,"Color":0},{"Id":"548","Name":"Test 23","Url":"","Type":0,"Color":0},{"Id":"607","Name":"Test 24","Url":"","Type":5,"Color":5},{"Id":"608","Name":"Test 25","Url":"","Type":5,"Color":5},{"Id":"592","Name":"Test 26","Url":"","Type":2,"Color":4},{"Id":"593","Name":"Test 27","Url":"","Type":2,"Color":4},{"Id":"566","Name":"Test 28","Url":"","Type":4,"Color":3},{"Id":"567","Name":"Test 29","Url":"","Type":4,"Color":3},{"Id":"612","Name":"Test 30","Url":"","Type":0,"Color":0},{"Id":"619","Name":"Test 31","Url":"","Type":0,"Color":0},{"Id":"631","Name":"Test 32","Url":"","Type":0,"Color":0},{"Id":"620","Name":"DELETE ME","Url":"","Type":0,"Color":0},{"Id":"638","Name":"Test X","Url":"","Type":4,"Color":9},{"Id":"655","Name":"Test 34","Url":"","Type":4,"Color":9},{"Id":"656","Name":"Test 35","Url":"","Type":5,"Color":5},{"Id":"648","Name":"Test 36","Url":"","Type":5,"Color":5},{"Id":"649","Name":"Test 37","Url":"","Type":5,"Color":5},{"Id":"650","Name":"Test 38","Url":"","Type":5,"Color":5},{"Id":"632","Name":"Test 39","Url":"","Type":0,"Color":0},{"Id":"635","Name":"Test 40","Url":"","Type":4,"Color":9},{"Id":"621","Name":"OR ME","Url":"","Type":0,"Color":0},{"Id":"661","Name":"Test 42","Url":"","Type":4,"Color":9},{"Id":"662","Name":"Test 43","Url":"","Type":5,"Color":5}],"Links":[{"Source":"529","Target":"532","Value":"0"},{"Source":"532","Target":"533","Value":"0"},{"Source":"533","Target":"534","Value":"0"},{"Source":"534","Target":"539","Value":"0"},{"Source":"539","Target":"551","Value":"0"},{"Source":"551","Target":"578","Value":"0"},{"Source":"551","Target":"579","Value":"0"},{"Source":"551","Target":"580","Value":"0"},{"Source":"539","Target":"569","Value":"0"},{"Source":"539","Target":"570","Value":"0"},{"Source":"534","Target":"602","Value":"0"},{"Source":"534","Target":"603","Value":"0"},{"Source":"534","Target":"604","Value":"0"},{"Source":"533","Target":"606","Value":"0"},{"Source":"533","Target":"625","Value":"0"},{"Source":"533","Target":"626","Value":"0"},{"Source":"532","Target":"540","Value":"0"},{"Source":"540","Target":"539","Value":"0"},{"Source":"539","Target":"551","Value":"0"},{"Source":"539","Target":"568","Value":"0"},{"Source":"539","Target":"569","Value":"0"},{"Source":"539","Target":"570","Value":"0"},{"Source":"540","Target":"586","Value":"0"},{"Source":"540","Target":"587","Value":"0"},{"Source":"532","Target":"544","Value":"0"},{"Source":"544","Target":"548","Value":"0"},{"Source":"548","Target":"539","Value":"0"},{"Source":"539","Target":"551","Value":"0"},{"Source":"539","Target":"570","Value":"0"},{"Source":"548","Target":"607","Value":"0"},{"Source":"548","Target":"608","Value":"0"},{"Source":"544","Target":"592","Value":"0"},{"Source":"544","Target":"593","Value":"0"},{"Source":"532","Target":"566","Value":"0"},{"Source":"532","Target":"567","Value":"0"},{"Source":"529","Target":"612","Value":"0"},{"Source":"612","Target":"619","Value":"0"},{"Source":"619","Target":"631","Value":"0"},{"Source":"631","Target":"551","Value":"0"},{"Source":"551","Target":"578","Value":"0"},{"Source":"551","Target":"579","Value":"0"},{"Source":"551","Target":"580","Value":"0"},{"Source":"631","Target":"620","Value":"0"},{"Source":"620","Target":"638","Value":"0"},{"Source":"638","Target":"655","Value":"0"},{"Source":"638","Target":"656","Value":"0"},{"Source":"620","Target":"648","Value":"0"},{"Source":"620","Target":"649","Value":"0"},{"Source":"620","Target":"650","Value":"0"},{"Source":"631","Target":"632","Value":"0"},{"Source":"631","Target":"635","Value":"0"},{"Source":"612","Target":"620","Value":"0"},{"Source":"620","Target":"638","Value":"0"},{"Source":"620","Target":"648","Value":"0"},{"Source":"620","Target":"649","Value":"0"},{"Source":"620","Target":"650","Value":"0"},{"Source":"612","Target":"621","Value":"0"},{"Source":"621","Target":"661","Value":"0"},{"Source":"621","Target":"662","Value":"0"}]}';

var json = JSON.parse(planJSON);

var counter = 0; // global counter for IDs

var edges = [];
var exists;
json.Links.forEach(function(e) {
  var sourceNode = json.Nodes.filter(function(n) {
      return n.Id === e.Source;
    })[0],
    targetNode = json.Nodes.filter(function(n) {
      return n.Id === e.Target;
    })[0];

  exists = false;
  edges.forEach(function(e) {
    if ((e.source.Id == sourceNode.Id) && (e.target.Id == targetNode.Id)) {
      exists = true;
    }
  });
  if (!exists) {
    edges.push({
      source: sourceNode,
      target: targetNode,
      value: e.Value
    });
  }
});
json.Links = edges;

json.Nodes.forEach(function(e) {
  if (e.Id > counter) {
    counter = e.Id + 1;
  }
});

var color = d3.scale.category10();

var width = 660,
  height = 400,
  fill = d3.scale.category20();

// mouse event vars
var selected_node = null,
  selected_link = null,
  mousedown_link = null,
  mousedown_node = null,
  mouseup_node = null;

// init svg
var outer = d3.select("#plan-container")
  .append("svg:svg")
  .attr("width", width)
  .attr("height", height)
  .attr("pointer-events", "all");

var vis = outer
  .append('svg:g')
  .call(d3.behavior.zoom().on("zoom", rescale))
  .on("dblclick.zoom", null)
  .append('svg:g')
  .on("mousemove", mousemove)
  .on("mousedown", mousedown)
  .on("mouseup", mouseup);

vis.append('svg:rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'white');

// init force layout
var force = d3.layout.force()
  .size([width, height])
  .nodes(json.Nodes)
  .links(json.Links)
  .linkDistance(50)
  .charge(-200)
  .on("tick", tick);

var link = vis.selectAll(".link")
  .data(json.Links)
  .enter().append("line")
  .attr("class", "link")
  .style("stroke-width", 2)
  .attr("class", "link")
  .attr("marker-end", "url(#arrowhead)");

vis.append("defs").append("marker")
  .attr("id", "arrowhead")
  .attr("refX", 6 + 3)
  .attr("refY", 2)
  .attr("markerWidth", 6)
  .attr("markerHeight", 4)
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M 0,0 V 4 L6,2 Z");

// line displayed when dragging new nodes
var drag_line = vis.append("line")
  .attr("class", "drag_line")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", 0)
  .attr("y2", 0);

// get layout properties
var nodes = force.nodes(),
  links = force.links(),
  node = vis.selectAll(".node", function(d) {
    return d.Id;
  }),
  link = vis.selectAll(".link", function(d) {
    return d.Source.Id + "_" + d.Target.Id;
  });

// add keyboard callback
d3.select(window)
  .on("keydown", keydown);

redraw();

// focus on svg
// vis.node().focus();

function mousedown() {
  if (!mousedown_node && !mousedown_link) {
    // allow panning if nothing is selected
    vis.call(d3.behavior.zoom().on("zoom"), rescale);
    return;
  }
}

function mousemove() {
  if (!mousedown_node) return;

  // update drag line
  drag_line
    .attr("x1", mousedown_node.x)
    .attr("y1", mousedown_node.y)
    .attr("x2", d3.svg.mouse(this)[0])
    .attr("y2", d3.svg.mouse(this)[1])
    .attr("marker-end", "url(#arrowhead)");
}

function mouseup() {
  if (mousedown_node) {
    // hide drag line
    drag_line
      .attr("class", "drag_line_hidden")

    if (!mouseup_node) {

      $('#new-node-details').css('display', 'block');

      // add node
      var point = d3.mouse(this),
        node = {
          x: point[0],
          y: point[1]
        },
        n = nodes.push(node);

      node.Name = 'Test';
      node.Id = counter++;

      console.log(counter);

      // select new node
      selected_node = node;
      selected_link = null;

      // add link to mousedown node
      links.push({
        source: mousedown_node,
        target: node
      });
    }

    redraw();
  }
  // clear mouse event vars
  resetMouseVars();
}

function resetMouseVars() {
  mousedown_node = null;
  mouseup_node = null;
  mousedown_link = null;
}

function tick() {
  link.attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });

  node.attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    });
}

// rescale g
function rescale() {
  trans = d3.event.translate;
  scale = d3.event.scale;

  vis.attr("transform",
    "translate(" + trans + ")" + " scale(" + scale + ")");
}

var new_node_text;
var new_node_style;

// redraw force layout
function redraw() {

  link = link.data(links, function(d) {
    return d.source.Id + "_" + d.target.Id;
  });

  link.enter().insert("line", ".node")
    .attr("class", "link")
    .on("mousedown",
      function(d) {
        mousedown_link = d;
        if (mousedown_link == selected_link) selected_link = null;
        else selected_link = mousedown_link;
        selected_node = null;
        redraw();
      })
    .attr("marker-end", "url(#arrowhead)");

  link.exit().remove();

  link
    .classed("link_selected", function(d) {
      return d === selected_link;
    });

  node = node.data(nodes, function(d) {
    return d.Id;
  });
    
  var new_node = node.enter()
    .append("g")
    .data(nodes)
    .attr("class", "node");
    
//var nodeEnter = update_node.enter().append("g") // ...

  new_node.append("svg:a")
    .attr("xlink:href", function(d) {
      return d.Url;
    }).transition();

  new_node_text = new_node.append("text")
    .attr("dx", 12)
    .attr("dy", ".35em")
    .text(function(d) {
      return d.Name;
    });

  new_node_style = new_node.append("path")
    .attr("class", "node")
    .attr("d", d3.svg.symbol()
      .type(function(d) {
        return d3.svg.symbolTypes[d.Type];
      }))
    .style("fill", function(d) {
      return color(d.Color);
    });

  node
    .attr("class", "node")
    .attr("r", 5)
    .on("mousedown",
      function(d) {
        // disable zoom
        vis.call(d3.behavior.zoom().on("zoom"), null);

        mousedown_node = d;
        if (mousedown_node == selected_node) selected_node = null;
        else selected_node = mousedown_node;
        selected_link = null;

        // reposition drag line
        drag_line
          .attr("class", "link")
          .attr("x1", mousedown_node.x)
          .attr("y1", mousedown_node.y)
          .attr("x2", mousedown_node.x)
          .attr("y2", mousedown_node.y);

        redraw();
      })
    .on("mousedrag",
      function(d) {
        // redraw();
      })
    .on("mouseup",
      function(d) {
        if (mousedown_node) {
          mouseup_node = d;
          if (mouseup_node == mousedown_node) {
            resetMouseVars();
            return;
          }

          // add link
          var link = {
            source: mousedown_node,
            target: mouseup_node
          };
          links.push(link);

          // select new link
          selected_link = link;
          selected_node = null;

          // enable zoom
          vis.call(d3.behavior.zoom().on("zoom"), rescale);

          redraw();
        }
      })
    .transition()
    .duration(750)
    .ease("elastic")
    .attr("r", 6.5);

  node.exit().transition()
    .attr("r", 0)
    .remove();

  node
    .classed("node_selected", function(d) {
      return d === selected_node;
    });

  if (d3.event) {
    // prevent browser's default behavior
    d3.event.preventDefault();
  }

  force.start();
  force.on("tick", function() {
    link.attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

   // $('#nodes-json-dump').val(JSON.stringify(json.Nodes));
   // $('#links-json-dump').val(JSON.stringify(json.Links));

    node.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });
}

function spliceLinksForNode(node) {
  toSplice = links.filter(
    function(l) {
      return (l.source.Id === node.Id) || (l.target.Id === node.Id);
    });
  toSplice.map(
    function(l) {
      links.splice(links.indexOf(l), 1);
    });
}

function deleteNode() {
  nodes.splice(nodes.indexOf(selected_node), 1);
  spliceLinksForNode(selected_node);
  drag_line
    .attr("class", "drag_line_hidden")
}

function keydown() {
  if (!selected_node && !selected_link) return;
  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46:
      { // delete
        if (selected_node) {
          deleteNode();
        } else if (selected_link) {
          links.splice(links.indexOf(selected_link), 1);
        }
        selected_link = null;
        selected_node = null;
        redraw();
        break;
      }
  }
}

// This function just returns some styles depending on the type of node selected
function getStyle(nodeType) {
  var nodeStyle = {};
  switch (nodeType) {
    case '1':
      nodeStyle.Color = 9;
      nodeStyle.Type = 1;
      break;
    case '2':
      nodeStyle.Color = 0;
      nodeStyle.Type = 2;
      break;
    case '3':
      nodeStyle.Color = 5;
      nodeStyle.Type = 3;
      break;
    case '4':
      nodeStyle.Color = 4;
      nodeStyle.Type = 4;
      break;
    case '5':
      nodeStyle.Color = 5;
      nodeStyle.Type = 5;
      break;
    case '6':
      nodeStyle.Color = 6;
      nodeStyle.Type = 6;
      break;
    default:
      null;
  }
  return nodeStyle;
}

function redrawNode() {
  new_node_text
    .style("opacity", 0)
    .transition().duration(500)
    .style("opacity", 1)
    .text(function(d) {
      return d.Name
    })

  new_node_style
    .style("opacity", 0)
    .transition().duration(250)
    .style("opacity", 1)
    .attr("class", "node")
    .attr("d", d3.svg.symbol()
      .type(function(d) {
        return d3.svg.symbolTypes[d.Type];
      }))
    .style("fill", function(d) {
      return color(d.Color);
    });
    
  // Update existing nodes
  node.select("text")
    .text(function(d) { return d.Name; });
    
  node.select("path")
    .attr("class", "node")
    .attr("d", d3.svg.symbol()
      .type(function(d) {
        return d3.svg.symbolTypes[d.Type];
      }))
    .style("fill", function(d) {
      return color(d.Color);
    });
}

$('#save-node-name').click(function() {
  nodes[(selected_node.index)].Name = $('#node-name').val();
  var style = getStyle($("#node-type").val());
  nodes[(selected_node.index)].Type = style.Type;
  nodes[(selected_node.index)].Color = style.Color;
  redrawNode();
});

