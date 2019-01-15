import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // -------------
 	General
-------------
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'html': {
    'font': [{ 'unit': 'string', 'value': 'normal' }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'sans-serif' }],
    'color': '#555'
  },
  'ul': {
    'listStyle': 'none'
  },
  'nav': {
    'listStyle': 'none'
  },
  'a': {
    'textDecoration': 'none',
    'color': 'inherit',
    'cursor': 'pointer',
    'opacity': '0.9'
  },
  'a:hover': {
    'opacity': '1'
  },
  'abtn': {
    'color': '#fff',
    'borderRadius': '4px',
    'textTransform': 'uppercase',
    'backgroundColor': '#2196F3',
    'fontWeight': '800',
    'textAlign': 'center'
  },
  'hr': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'backgroundColor': '#2196F3',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 80 }]
  },
  'section': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 125 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 125 }, { 'unit': 'px', 'value': 100 }],
    '<w1000': {
      'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 50 }]
    },
    '<w600': {
      'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 30 }]
    }
  },
  'section h3title': {
    'color': '#414a4f',
    'textTransform': 'capitalize',
    'font': [{ 'unit': 'string', 'value': 'bold' }, { 'unit': 'px', 'value': 32 }, { 'unit': 'string', 'value': ''Open' }, { 'unit': 'string', 'value': 'Sans',' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'marginBottom': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center'
  },
  'section p': {
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 2 }]
  },
  'ulgrid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center'
  },
  // -------------
 	Header
-------------
  'header': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '10',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }],
    '<w1000': {
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }]
    },
    '<w700': {
      'flexDirection': 'column'
    }
  },
  'header h2': {
    'fontFamily': ''Quicksand', sans-serif'
  },
  'header nav': {
    'display': 'flex'
  },
  'header nav li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'header nav li:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'header nav li:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------
 	Hero Section
----------------
  'hero': {
    'position': 'relative',
    'justifyContent': 'center',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'color': '#fff',
    'textAlign': 'center',
    '<w800': {
      'minHeight': [{ 'unit': 'px', 'value': 600 }]
    }
  },
  'hero background-image': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundSize': 'cover',
    'backgroundColor': '#2196F3',
    'zIndex': '-1'
  },
  'hero background-image:after': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#1e2529',
    'opacity': '0.75'
  },
  'hero h1': {
    'font': [{ 'unit': 'string', 'value': 'bold' }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': ''Open' }, { 'unit': 'string', 'value': 'Sans',' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'hero h3': {
    'font': [{ 'unit': 'string', 'value': 'normal' }, { 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': ''Open' }, { 'unit': 'string', 'value': 'Sans',' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'hero abtn': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 46 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 46 }]
  },
  // --------------------
 	Our Work Section
---------------------
  'оur-work': {
    'backgroundColor': '#fff'
  },
  'our-work grid li': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 350 }],
    'borderRadius': '3px',
    'backgroundClip': 'content-box',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'backgroundColor': '#333'
  },
  'our-work grid lismall': {
    'flexBasis': '40%',
    '<w1000': {
      'flexBasis': '100%'
    }
  },
  'our-work grid lilarge': {
    'flexBasis': '60%'
  },
  // ----------------------
 	Features Section
----------------------
  'features': {
    'backgroundColor': '#f7f7f7'
  },
  'features grid li': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'flexBasis': '33%',
    'textAlign': 'center',
    '<w1000': {
      'flexBasis': '70%',
      'marginBottom': [{ 'unit': 'px', 'value': 65 }]
    },
    '<w600': {
      'flexBasis': '100%'
    }
  },
  'features grid li i': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'color': '#2196F3',
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'features grid li h4': {
    'color': '#555',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'features grid li p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // --------------------
 	Reviews Section
--------------------
  'reviews': {
    'backgroundColor': '#fff'
  },
  'reviews quote': {
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    '<w1000': {
      'fontSize': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'reviews author': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'reviews author:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ---------------------
 	Contact Section
---------------------
  'contact': {
    'backgroundColor': '#f7f7f7',
    'justifyContent': 'top',
    'minHeight': [{ 'unit': 'vh', 'value': 80 }]
  },
  'contact h3title': {
    'textTransform': 'none'
  },
  'contact form': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexWrap': 'wrap',
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'contact form input': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'flex': '1',
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#555',
    '<w800': {
      'flexBasis': '100%',
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'contact form btn': {
    'padding': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 42 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 42 }]
  },
  // -------------
 	Footer
-------------
  'footer': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'textAlign': 'center',
    'color': '#fff',
    'backgroundColor': '#414a4f',
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }],
    '<w700': {
      'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'footer ul': {
    'display': 'flex',
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }]
  },
  'footer ul li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'footer ul li:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer ul li:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer p': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': 'rgba(255,255,255,0.6)',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'footer p a': {
    'color': '#fff'
  },
  // -- Demo ads --
  'is-danger': {
    'color': 'red',
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'textAlign': 'left'
  }
});
