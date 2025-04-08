export const rawdata = {
	_id: {
	  $oid: "67453d95f2f496defc60e2d7"
	},
	name: "rawdata",
	collectionName: "template",
	displayName: "Raw Data",
	activity: {
	  label: "",
	  value: ""
	},
	site: {
	  label: "",
	  value: ""
	},
	frameWork: {
	  label: "",
	  value: ""
	},
	fields: [
	  {
	    name: "displayName",
	    dataType: {
	      label: "String",
	      value: "string"
	    },
	    componentType: {
	      label: "TextField",
	      value: "text"
	    },
	    form: {
	      props: {
		label: "Raw Data Name",
		placeholder: "Input Raw Data Name"
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "displayName",
	      header: "Raw Data Name",
	      width: 250,
	      cell: {},
	      filter: "agTextColumnFilter",
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Text",
		value: 1
	      }
	    }
	  },
	  {
	    name: "frameWork",
	    dataType: {
	      label: "Option",
	      value: "option"
	    },
	    componentType: {
	      label: "SelectField",
	      value: "select"
	    },
	    form: {
	      props: {
		label: "Framework",
		placeholder: "Input Framework",
		api: {
		  name: {
		    label: "useGetFrameWork",
		    value: "useGetFrameWork"
		  },
		  url: {
		    label: "/master/dropdown/framework",
		    value: "/master/dropdown/framework"
		  },
		  method: {
		    label: "GET",
		    value: 0
		  }
		}
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "frameWork",
	      header: "Framework",
	      width: 200,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Select",
		value: 6
	      }
	    }
	  },
	  {
	    name: "activity",
	    dataType: {
	      label: "Option",
	      value: "option"
	    },
	    componentType: {
	      label: "SelectField",
	      value: "select"
	    },
	    form: {
	      props: {
		label: "Activity",
		placeholder: "Input Activity",
		api: {
		  name: {
		    label: "useGetActivity",
		    value: "useGetActivity"
		  },
		  url: {
		    label: "/master/dropdown/activity",
		    value: "/master/dropdown/activity"
		  },
		  method: {
		    label: "GET",
		    value: 0
		  }
		}
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "activity",
	      header: "Activity",
	      width: 200,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Select",
		value: 6
	      }
	    }
	  },
	  {
	    name: "site",
	    dataType: {
	      label: "Option",
	      value: "option"
	    },
	    componentType: {
	      label: "SelectField",
	      value: "select"
	    },
	    form: {
	      props: {
		label: "Site",
		placeholder: "Input Site",
		api: {
		  name: {
		    label: "useGetSite",
		    value: "useGetSite"
		  },
		  url: {
		    label: "/master/dropdown/site",
		    value: "/master/dropdown/site"
		  },
		  method: {
		    label: "GET",
		    value: 0
		  }
		}
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "site",
	      header: "Site",
	      width: 200,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Select",
		value: 6
	      }
	    }
	  },
	  {
	    name: "description",
	    dataType: {
	      label: "String",
	      value: "string"
	    },
	    componentType: {
	      label: "TextField",
	      value: "text"
	    },
	    form: {
	      props: {
		label: "Description (optional)",
		placeholder: "Input Decription",
		rows: 3
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "description",
	      header: "Description",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Text",
		value: 1
	      }
	    }
	  },
	  {
	    name: "status",
	    dataType: {
	      label: "Boolean",
	      value: "boolean"
	    },
	    componentType: {
	      label: "Switch",
	      value: "switch"
	    },
	    form: {
	      props: {
		label: "Status",
		placeholder: "Input status",
		options: [
		  {
		    label: "Active",
		    value: true
		  },
		  {
		    label: "Inactive",
		    value: false
		  }
		],
		replaceFieldsPath: [
		  "root",
		]
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [],
	      group: {
		name: "Project Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "status",
	      header: "Status",
	      width: 200,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: false,
	      type: {
		label: "Status",
		value: 8
	      }
	    }
	  },
	  {
	    name: "name",
	    dataType: {
	      label: "String",
	      value: "string"
	    },
	    componentType: {
	      label: "TextField",
	      value: "text"
	    },
	    form: {
	      props: {
		label: "Name",
		placeholder: "Name"
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "name",
	      header: "Name",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Text",
		value: 1
	      }
	    }
	  },
	  {
	    name: "collectionName",
	    dataType: {
	      label: "String",
	      value: "string"
	    },
	    componentType: {
	      label: "TextField",
	      value: "text"
	    },
	    form: {
	      props: {
		label: "Collection Name",
		placeholder: "Input Collection Name"
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 4,
		xl: 4
	      },
	      validation: [
		{
		  validateType: {
		    label: "Required",
		    value: "required"
		  }
		}
	      ],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "collectionName",
	      header: "Collection Name",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Text",
		value: 1
	      }
	    }
	  },
	  {
	    name: "apiFetch",
	    dataType: {
	      label: "API",
	      value: "api"
	    },
	    componentType: {
	      label: "AutocompleteDetail",
	      value: "autocompletedetail"
	    },
	    form: {
	      props: {
		label: "API Fetch",
		placeholder: "API Fetch",
		api: {
		  name: {
		    label: "useGetAPIRawdata",
		    value: "useGetAPIRawdata"
		  },
		  url: {
		    label: "/master/data/api/67c90c4bd140d90beb63961f",
		    value: "/master/data/api/67c90c4bd140d90beb63961f"
		  },
		  method: {
		    label: "GET",
		    value: 0
		  }
		}
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "apiFetch",
	      header: "API Fetch",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Object",
		value: 9
	      }
	    }
	  },
	  {
	    name: "tableButtons",
	    dataType: {
	      label: "Array",
	      value: "array"
	    },
	    componentType: {
	      label: "ListItem",
	      value: "listitem"
	    },
	    form: {
	      props: {
		label: "Table Button",
		placeholder: "Table Button",
		fields: [
		  {
		    name: "ord",
		    dataType: {
		      label: "No",
		      value: "no"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "No.",
			placeholder: "No."
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [],
		      hide: true
		    },
		    column: {
		      field: "ord",
		      header: "No.",
		      width: 100,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "No",
			value: 12
		      }
		    }
		  },
		  {
		    name: "text",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Button Name",
			placeholder: "Button Name"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "text",
		      header: "Button Name",
		      width: 500,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "action",
		    dataType: {
		      label: "Option",
		      value: "option"
		    },
		    componentType: {
		      label: "SelectField",
		      value: "select"
		    },
		    form: {
		      props: {
			label: "Action",
			placeholder: "Action",
			api: {
			  name: {
			    label: "useGetAction",
			    value: "useGetAction"
			  },
			  url: {
			    label: "/master/dropdown/studio/tableAction",
			    value: "/master/dropdown/studio/tableAction"
			  },
			  method: {
			    label: "GET",
			    value: 0
			  }
			}
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "action",
		      header: "Action",
		      width: 500,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Select",
			value: 6
		      }
		    }
		  },
		  {
		    name: "route",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Route",
			placeholder: "Route"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: []
		    },
		    column: {
		      field: "route",
		      header: "Route",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "props",
		    dataType: {
		      label: "Object",
		      value: "object"
		    },
		    componentType: {
		      label: "GroupField",
		      value: "groupfield"
		    },
		    form: {
		      props: {
			label: "Button Style",
			placeholder: "Button Style",
			startIcon: {
			  label: "style",
			  value: "style"
			},
			fields: [
			  {
			    name: "startIcon",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Start Icon",
				placeholder: "Start Icon",
				api: {
				  name: {
				    label: "useGetStartIcon",
				    value: "useGetStartIcon"
				  },
				  url: {
				    label: "/master/dropdown/studio/icon",
				    value: "/master/dropdown/studio/icon"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: []
			    },
			    column: {
			      field: "startIcon",
			      header: "Start Icon",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: true,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "color",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Color",
				placeholder: "Color",
				api: {
				  name: {
				    label: "useGetColor",
				    value: "useGetColor"
				  },
				  url: {
				    label: "/master/dropdown/studio/color",
				    value: "/master/dropdown/studio/color"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "color",
			      header: "Color",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "variant",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Variant",
				placeholder: "Variant",
				api: {
				  name: {
				    label: "useGetVariant",
				    value: "useGetVariant"
				  },
				  url: {
				    label: "/master/dropdown/studio/variant",
				    value: "/master/dropdown/studio/variant"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "variant",
			      header: "Variant",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  }
			]
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "props",
		      header: "Button Style",
		      width: 450,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "DisplayButton",
			value: 7
		      }
		    }
		  }
		],
		formButtons: [
		  {
		    text: "Cancel",
		    action: {
		      label: "Cancel",
		      value: 1
		    },
		    props: {
		      bgcolor: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    },
		    ord: 1
		  },
		  {
		    text: "Confirm",
		    action: {
		      label: "Save",
		      value: 3
		    },
		    props: {
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "contained",
			value: "contained"
		      }
		    },
		    ord: 2
		  }
		],
		tableButtons: [
		  {
		    text: "Add",
		    action: {
		      label: "Add",
		      value: 2
		    },
		    props: {
		      startIcon: {
			label: "add",
			value: "add"
		      },
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    }
		  }
		],
		columnAction: [
		  {
		    field: "colaction",
		    header: "Action",
		    type: {
		      label: "Action",
		      value: 0
		    },
		    width: 30,
		    cell: null,
		    filter: null,
		    sort: false,
		    hide: false,
		    groupName: null,
		    actions: [
		      {
			startIcon: {
			  label: "Edit",
			  value: "edit"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Open",
			  value: 2
			},
			ord: 1
		      },
		      {
			startIcon: {
			  label: "Delete",
			  value: "delete"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Delete",
			  value: 4
			},
			ord: 2
		      }
		    ]
		  }
		]
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      field: "tableButtons",
	      header: "Table Button",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Array",
		value: 10
	      }
	    }
	  },
	  {
	    name: "columnAction",
	    dataType: {
	      label: "Array",
	      value: "array"
	    },
	    componentType: {
	      label: "ListItem",
	      value: "listitem"
	    },
	    form: {
	      props: {
		label: "Column Action",
		placeholder: "Column Action",
		fields: [
		  {
		    name: "ord",
		    dataType: {
		      label: "No",
		      value: "no"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "No.",
			placeholder: "No."
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [],
		      hide: true
		    },
		    column: {
		      field: "ord",
		      header: "No.",
		      width: 100,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "No",
			value: 12
		      }
		    }
		  },
		  {
		    name: "field",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Field Name",
			placeholder: "Field"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "field",
		      header: "Field Name",
		      width: 300,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "header",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Header",
			placeholder: "Header"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "header",
		      header: "Header",
		      width: 300,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "width",
		    dataType: {
		      label: "Number",
		      value: "number"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Width",
			placeholder: "Width"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: []
		    },
		    column: {
		      field: "width",
		      header: "Width",
		      width: 50,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Number",
			value: 2
		      }
		    }
		  },
		  {
		    name: "type",
		    dataType: {
		      label: "Option",
		      value: "option"
		    },
		    componentType: {
		      label: "SelectField",
		      value: "select"
		    },
		    form: {
		      props: {
			label: "Type",
			placeholder: "Type",
			api: {
			  name: {
			    label: "useGetCellType",
			    value: "useGetCellType"
			  },
			  url: {
			    label: "/master/dropdown/studio/columnActionType",
			    value: "/master/dropdown/studio/columnActionType"
			  },
			  method: {
			    label: "GET",
			    value: 0
			  }
			}
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "type",
		      header: "Type",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Select",
			value: 6
		      }
		    }
		  },
		  {
		    name: "actions",
		    dataType: {
		      label: "Array",
		      value: "array"
		    },
		    componentType: {
		      label: "ListItemInline",
		      value: "listiteminline"
		    },
		    form: {
		      props: {
			label: "Actions",
			placeholder: "Actions",
			startIcon: {
			  label: "action",
			  value: "action"
			},
			fields: [
			  {
			    name: "ord",
			    dataType: {
			      label: "Number",
			      value: "number"
			    },
			    componentType: {
			      label: "TextField",
			      value: "text"
			    },
			    form: {
			      props: {
				label: "No.",
				placeholder: "No."
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: []
			    },
			    column: {
			      field: "ord",
			      header: "No.",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Number",
				value: 2
			      }
			    }
			  },
			  {
			    name: "startIcon",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Start Icon",
				placeholder: "Start Icon",
				api: {
				  name: {
				    label: "useGetStartIcon",
				    value: "useGetStartIcon"
				  },
				  url: {
				    label: "/master/dropdown/studio/icon",
				    value: "/master/dropdown/studio/icon"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: []
			    },
			    column: {
			      field: "startIcon",
			      header: "Start Icon",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "color",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Color",
				placeholder: "Color",
				api: {
				  name: {
				    label: "useGetColor",
				    value: "useGetColor"
				  },
				  url: {
				    label: "/master/dropdown/studio/color",
				    value: "/master/dropdown/studio/color"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "color",
			      header: "Color",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "variant",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Variant",
				placeholder: "Variant",
				api: {
				  name: {
				    label: "useGetVariant",
				    value: "useGetVariant"
				  },
				  url: {
				    label: "/master/dropdown/studio/variant",
				    value: "/master/dropdown/studio/variant"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "variant",
			      header: "Variant",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "action",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Action",
				placeholder: "Action",
				api: {
				  name: {
				    label: "useGetAction",
				    value: "useGetAction"
				  },
				  url: {
				    label: "/master/dropdown/studio/columnAction",
				    value: "/master/dropdown/studio/columnAction"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "action",
			      header: "Action",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "route",
			    dataType: {
			      label: "String",
			      value: "string"
			    },
			    componentType: {
			      label: "TextField",
			      value: "text"
			    },
			    form: {
			      props: {
				label: "Route",
				placeholder: "Route"
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: []
			    },
			    column: {
			      field: "route",
			      header: "Route",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Text",
				value: 1
			      }
			    }
			  },
			  {
			    name: "api",
			    dataType: {
			      label: "API",
			      value: "api"
			    },
			    componentType: {
			      label: "AutocompleteDetail",
			      value: "autocompletedetail"
			    },
			    form: {
			      props: {
				label: "API",
				placeholder: "API",
				api: {
				  name: {
				    label: "useGetAPIRawdata",
				    value: "useGetAPIRawdata"
				  },
				  url: {
				    label: "/master/data/api/67c90c4bd140d90beb63961f",
				    value: "/master/data/api/67c90c4bd140d90beb63961f"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 12,
				lg: 12,
				xl: 12
			      },
			      validation: []
			    },
			    column: {
			      field: "api",
			      header: "API",
			      width: 150,
			      cell: {},
			      filter: true,
			      sort: true,
			      footer: null,
			      hide: true,
			      type: {
				label: "Object",
				value: 9
			      }
			    }
			  },
			],
			formButtons: [
			  {
			    text: "Cancel",
			    action: {
			      label: "Cancel",
			      value: 1
			    },
			    props: {
			      color: {
				label: "primary",
				value: "primary"
			      },
			      variant: {
				label: "outlined",
				value: "outlined"
			      }
			    },
			    ord: 1
			  },
			  {
			    text: "Confirm",
			    action: {
			      label: "Save",
			      value: 3
			    },
			    props: {
			      color: {
				label: "primary",
				value: "primary"
			      },
			      variant: {
				label: "contained",
				value: "contained"
			      }
			    },
			    ord: 2
			  }
			],
			tableButtons: [
			  {
			    text: "Add",
			    action: {
			      label: "Add",
			      value: 2
			    },
			    props: {
			      startIcon: {
				label: "add",
				value: "add"
			      },
			      color: {
				label: "primary",
				value: "primary"
			      },
			      variant: {
				label: "outlined",
				value: "outlined"
			      }
			    }
			  }
			],
			columnAction: [
			  {
			    field: "colaction",
			    header: "Action",
			    type: 0,
			    width: 30,
			    cell: null,
			    filter: null,
			    sort: false,
			    hide: false,
			    groupName: null,
			    actions: [
			      {
				startIcon: {
				  label: "edit",
				  value: "edit"
				},
				color: {
				  label: "inherit",
				  value: "inherit"
				},
				variant: {
				  label: "contained",
				  value: "contained"
				},
				action: {
				  label: "Open",
				  value: 2
				},
				ord: 1
			      },
			      {
				startIcon: {
				  label: "delete",
				  value: "delete"
				},
				color: {
				  label: "inherit",
				  value: "inherit"
				},
				variant: {
				  label: "contained",
				  value: "contained"
				},
				action: {
				  label: "Delete",
				  value: 4
				},
				ord: 2
			      }
			    ]
			  }
			]
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "actions",
		      header: "Actions",
		      width: 150,
		      cell: {},
		      filter: true,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Array",
			value: 10
		      }
		    }
		  },
		  {
		    name: "filter",
		    dataType: {
		      label: "Boolean",
		      value: "boolean"
		    },
		    componentType: {
		      label: "Checkbox",
		      value: "checkbox"
		    },
		    form: {
		      props: {
			label: "Filter",
			placeholder: "Filter"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "filter",
		      header: "Filter",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Boolean",
			value: 11
		      }
		    }
		  },
		  {
		    name: "sort",
		    dataType: {
		      label: "Boolean",
		      value: "boolean"
		    },
		    componentType: {
		      label: "Checkbox",
		      value: "checkbox"
		    },
		    form: {
		      props: {
			label: "Sort",
			placeholder: "Sort"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "sort",
		      header: "Sort",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Boolean",
			value: 11
		      }
		    }
		  },
		  {
		    name: "hide",
		    dataType: {
		      label: "Boolean",
		      value: "boolean"
		    },
		    componentType: {
		      label: "Checkbox",
		      value: "checkbox"
		    },
		    form: {
		      props: {
			label: "Hide",
			placeholder: "Hide"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "hide",
		      header: "Hide",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Boolean",
			value: 11
		      }
		    }
		  }
		],
		formButtons: [
		  {
		    text: "Cancel",
		    action: {
		      label: "Cancel",
		      value: 1
		    },
		    props: {
		      bgcolor: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    },
		    ord: 1
		  },
		  {
		    text: "Confirm",
		    action: {
		      label: "Save",
		      value: 3
		    },
		    props: {
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "contained",
			value: "contained"
		      }
		    },
		    ord: 2
		  }
		],
		tableButtons: [
		  {
		    text: "Add",
		    action: {
		      label: "Add",
		      value: 2
		    },
		    props: {
		      startIcon: {
			label: "add",
			value: "add"
		      },
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    }
		  }
		],
		columnAction: [
		  {
		    field: "colaction",
		    header: "Action",
		    type: {
		      label: "Action",
		      value: 0
		    },
		    width: 30,
		    cell: null,
		    filter: null,
		    sort: false,
		    hide: false,
		    groupName: null,
		    actions: [
		      {
			startIcon: {
			  label: "edit",
			  value: "edit"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Open",
			  value: 2
			},
			ord: 1
		      },
		      {
			startIcon: {
			  label: "delete",
			  value: "delete"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Delete",
			  value: 4
			},
			ord: 2
		      }
		    ]
		  }
		]
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      header: "Column Action",
	      width: 150,
	      cell: {},
	      filter: false,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Array",
		value: 10
	      }
	    }
	  },
	  {
	    name: "fields",
	    dataType: {
	      label: "Array",
	      value: "array"
	    },
	    componentType: {
	      label: "ListItem",
	      value: "listitem"
	    },
	    form: {
	      props: {
		label: "Fields",
		placeholder: "Fields",
		isSetStore: true,
		fields: [
		  {
		    name: "ord",
		    dataType: {
		      label: "No",
		      value: "no"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "No.",
			placeholder: "No."
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [],
		      hide: true
		    },
		    column: {
		      field: "ord",
		      header: "No.",
		      width: 100,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "No",
			value: 12
		      }
		    }
		  },
		  {
		    name: "name",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Field Name",
			placeholder: "Field Name"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "name",
		      header: "Field Name",
		      width: 300,
		      cell: {},
		      filter: false,
		      sort: false,
		      footer: null,
		      hide: false,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "dataType",
		    dataType: {
		      label: "Option",
		      value: "option"
		    },
		    componentType: {
		      label: "SelectField",
		      value: "select"
		    },
		    form: {
		      props: {
			label: "Data Type",
			placeholder: "Data Type",
			api: {
			  name: {
			    label: "useGetDataType",
			    value: "useGetDataType"
			  },
			  url: {
			    label: "/master/dropdown/studio/dataType",
			    value: "/master/dropdown/studio/dataType"
			  },
			  method: {
			    label: "GET",
			    value: 0
			  }
			}
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "dataType",
		      header: "Data Type",
		      width: 300,
		      cell: {},
		      filter: false,
		      sort: false,
		      footer: null,
		      hide: false,
		      type: {
			label: "Select",
			value: 6
		      }
		    }
		  },
		  {
		    name: "componentType",
		    dataType: {
		      label: "Option",
		      value: "option"
		    },
		    componentType: {
		      label: "SelectField",
		      value: "select"
		    },
		    form: {
		      props: {
			label: "Component Type",
			placeholder: "Component Type",
			api: {
			  name: {
			    label: "useGetComponentType",
			    value: "useGetComponentType"
			  },
			  url: {
			    label: "/master/dropdown/studio/componentType",
			    value: "/master/dropdown/studio/componentType"
			  },
			  method: {
			    label: "GET",
			    value: 0
			  }
			},
			replaceFieldsPath: [
			  "fields.form.props",
			  "fields.column"
			]
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "componentType",
		      header: "Component Type",
		      width: 450,
		      cell: {},
		      filter: false,
		      sort: false,
		      footer: null,
		      hide: false,
		      type: {
			label: "Select",
			value: 6
		      }
		    }
		  },
		  {
		    name: "form",
		    dataType: {
		      label: "Object",
		      value: "object"
		    },
		    componentType: {
		      label: "GroupField",
		      value: "groupfield"
		    },
		    form: {
		      props: {
			label: "Form",
			placeholder: "Form",
			startIcon: {
			  label: "form",
			  value: "form"
			},
			fields: [
			  {
			    name: "props",
			    dataType: {
			      label: "Object",
			      value: "object"
			    },
			    componentType: {
			      label: "GroupField",
			      value: "groupfield"
			    },
			    form: {
			      props: {
				label: "Properties",
				placeholder: "Field Props",
				startIcon: {
				  label: "setting",
				  value: "setting"
				},
				fields: []
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 12,
				lg: 12,
				xl: 12
			      },
			      validation: []
			    },
			    column: {
			      field: "props",
			      header: "Properties",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: true,
			      type: {
				label: "Object",
				value: 9
			      }
			    }
			  },
			  {
			    name: "breakPoint",
			    dataType: {
			      label: "Object",
			      value: "object"
			    },
			    componentType: {
			      label: "GroupField",
			      value: "groupfield"
			    },
			    form: {
			      props: {
				label: "Break Point",
				placeholder: "Break Point",
				fields: [
				  {
				    name: "xs",
				    dataType: {
				      label: "Number",
				      value: "number"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "XS (Phones)",
					placeholder: "XS (Phones)"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 4,
					lg: 2,
					xl: 2
				      },
				      validation: [
					{
					  validateType: {
					    label: "Max",
					    value: "max"
					  },
					  param: "12",
					  message: "Less than or equal to 12"
					}
				      ]
				    },
				    column: {
				      field: "xs",
				      header: "XS",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Number",
					value: 2
				      }
				    }
				  },
				  {
				    name: "sm",
				    dataType: {
				      label: "Number",
				      value: "number"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "SM (Tablets)",
					placeholder: "SM (Tablets)"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 4,
					lg: 2,
					xl: 2
				      },
				      validation: [
					{
					  validateType: {
					    label: "Max",
					    value: "max"
					  },
					  param: "12",
					  message: "Less than or equal to 12"
					}
				      ]
				    },
				    column: {
				      field: "sm",
				      header: "SM",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Number",
					value: 2
				      }
				    }
				  },
				  {
				    name: "md",
				    dataType: {
				      label: "Number",
				      value: "number"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "MD (Small Laptops)",
					placeholder: "MD (Small Laptops)"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 4,
					lg: 2,
					xl: 2
				      },
				      validation: [
					{
					  validateType: {
					    label: "Max",
					    value: "max"
					  },
					  param: "12",
					  message: "Less than or equal to 12"
					}
				      ]
				    },
				    column: {
				      field: "md",
				      header: "MD",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Number",
					value: 2
				      }
				    }
				  },
				  {
				    name: "lg",
				    dataType: {
				      label: "Number",
				      value: "number"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "LG (Laptops)",
					placeholder: "LG (Laptops)"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 4,
					lg: 2,
					xl: 2
				      },
				      validation: [
					{
					  validateType: {
					    label: "Max",
					    value: "max"
					  },
					  param: "12",
					  message: "Less than or equal to 12"
					}
				      ]
				    },
				    column: {
				      field: "lg",
				      header: "LG",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Number",
					value: 2
				      }
				    }
				  },
				  {
				    name: "xl",
				    dataType: {
				      label: "Number",
				      value: "number"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "XL (Desktops)",
					placeholder: "XL (Desktops)"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 4,
					lg: 2,
					xl: 2
				      },
				      validation: [
					{
					  validateType: {
					    label: "Max",
					    value: "max"
					  },
					  param: "12",
					  message: "Less than or equal to 12"
					}
				      ]
				    },
				    column: {
				      field: "xl",
				      header: "XL",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Number",
					value: 2
				      }
				    }
				  }
				]
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 12,
				lg: 12,
				xl: 12
			      },
			      validation: []
			    },
			    column: {
			      field: "breakPoint",
			      header: "Break Point",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Object",
				value: 9
			      }
			    }
			  },
			  {
			    name: "validation",
			    dataType: {
			      label: "Array",
			      value: "array"
			    },
			    componentType: {
			      label: "ListItemInline",
			      value: "listiteminline"
			    },
			    form: {
			      props: {
				label: "Validation",
				placeholder: "Validation",
				fields: [
				  {
				    name: "validateType",
				    dataType: {
				      label: "Option",
				      value: "option"
				    },
				    componentType: {
				      label: "SelectField",
				      value: "select"
				    },
				    form: {
				      props: {
					label: "Validation Type",
					placeholder: "Validation Type",
					api: {
					  name: {
					    label: "useGetValidationType",
					    value: "useGetValidationType"
					  },
					  url: {
					    label: "/master/dropdown/studio/validateType",
					    value: "/master/dropdown/studio/validateType"
					  },
					  method: {
					    label: "GET",
					    value: 0
					  }
					}
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 4,
					xl: 4
				      },
				      validation: []
				    },
				    column: {
				      field: "validateType",
				      header: "Validation Type",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Select",
					value: 6
				      }
				    }
				  },
				  {
				    name: "param",
				    dataType: {
				      label: "String",
				      value: "string"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "Validation Param",
					placeholder: "Validation Param"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 4,
					xl: 4
				      },
				      validation: []
				    },
				    column: {
				      field: "param",
				      header: "Validation Param",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Text",
					value: 1
				      }
				    }
				  },
				  {
				    name: "message",
				    dataType: {
				      label: "String",
				      value: "string"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "Validation Message",
					placeholder: "Validation Message"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 4,
					xl: 4
				      },
				      validation: []
				    },
				    column: {
				      field: "message",
				      header: "Validation Message",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Text",
					value: 1
				      }
				    }
				  }
				]
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 12,
				lg: 12,
				xl: 12
			      },
			      validation: []
			    },
			    column: {
			      field: "validation",
			      header: "Validation",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Array",
				value: 10
			      }
			    }
			  },
			  {
			    name: "group",
			    dataType: {
			      label: "Group",
			      value: "group"
			    },
			    componentType: {
			      label: "GroupField",
			      value: "groupfield"
			    },
			    form: {
			      props: {
				label: "Section",
				placeholder: "Group",
				fields: [
				  {
				    name: "name",
				    dataType: {
				      label: "String",
				      value: "string"
				    },
				    componentType: {
				      label: "TextField",
				      value: "text"
				    },
				    form: {
				      props: {
					label: "Section Name",
					placeholder: "Section Name"
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 4,
					xl: 4
				      },
				      validation: []
				    },
				    column: {
				      field: "name",
				      header: "Section Name",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Text",
					value: 1
				      }
				    }
				  },
				  {
				    name: "componentGroupType",
				    dataType: {
				      label: "Option",
				      value: "option"
				    },
				    componentType: {
				      label: "SelectField",
				      value: "select"
				    },
				    form: {
				      props: {
					label: "Section type",
					placeholder: "Section type",
					api: {
					  name: {
					    label: "useGetGroup",
					    value: "useGetGroup"
					  },
					  url: {
					    label: "/master/dropdown/studio/group",
					    value: "/master/dropdown/studio/group"
					  },
					  method: {
					    label: "GET",
					    value: 0
					  }
					}
				      },
				      breakPoint: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 4,
					xl: 4
				      },
				      validation: []
				    },
				    column: {
				      field: "componentGroupType",
				      header: "Section Type",
				      width: 150,
				      cell: {},
				      filter: false,
				      sort: true,
				      footer: null,
				      hide: false,
				      type: {
					label: "Select",
					value: 6
				      }
				    }
				  }
				]
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 12,
				lg: 12,
				xl: 12
			      },
			      validation: []
			    },
			    column: {
			      field: "group",
			      header: "Section",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Object",
				value: 9
			      }
			    }
			  },
			  {
			    name: "hide",
			    dataType: {
				label: "Boolean",
				value: "boolean"
			    },
			    componentType: {
				label: "Checkbox",
				value: "checkbox"
			    },
			    form: {
				props: {
				    label: "Hide Field",
				    placeholder: "Hide"
				},
				breakPoint: {
				    xs: 12,
				    sm: 12,
				    md: 12,
				    lg: 12,
				    xl: 12
				},
				validation: []
			    },
			    column: {
				field: "hide",
				header: "Hide",
				width: 150,
				cell: {},
				filter: false,
				sort: true
			    }
			  }
			]
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "form",
		      header: "Form",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Object",
			value: 9
		      }
		    }
		  },
		  {
		    name: "column",
		    dataType: {
		      label: "Object",
		      value: "object"
		    },
		    componentType: {
		      label: "GroupField",
		      value: "groupfield"
		    },
		    form: {
		      props: {
			label: "Data Grid",
			placeholder: "Data Grid",
			startIcon: {
			  label: "table",
			  value: "table"
			},
			fields: []
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "column",
		      header: "Data Grid",
		      width: 150,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "Object",
			value: 9
		      }
		    }
		  }
		],
		formButtons: [
		  {
		    text: "Cancel",
		    action: {
		      label: "Cancel",
		      value: 1
		    },
		    props: {
		      bgcolor: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    },
		    ord: 1
		  },
		  {
		    text: "Confirm",
		    action: {
		      label: "Save",
		      value: 3
		    },
		    props: {
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "contained",
			value: "contained"
		      }
		    },
		    ord: 2
		  }
		],
		tableButtons: [
		  {
		    text: "Add",
		    action: {
		      label: "Add",
		      value: 2
		    },
		    props: {
		      startIcon: {
			label: "add",
			value: "add"
		      },
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    }
		  }
		],
		columnAction: [
		  {
		    field: "colaction",
		    header: "Action",
		    type: {
		      label: "Action",
		      value: 0
		    },
		    width: 30,
		    cell: null,
		    filter: null,
		    sort: false,
		    hide: false,
		    groupName: null,
		    actions: [
		      {
			startIcon: {
			  label: "edit",
			  value: "edit"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Open",
			  value: 2
			},
			ord: 1
		      },
		      {
			startIcon: {
			  label: "delete",
			  value: "delete"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Delete",
			  value: 4
			},
			ord: 2
		      }
		    ]
		  }
		]
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      header: "Field",
	      width: 150,
	      cell: {},
	      filter: false,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Array",
		value: 10
	      }
	    }
	  },
    
	  {
	    name: "criteriaOptions",
	    dataType: {
	      label: "Array",
	      value: "array"
	    },
	    componentType: {
	      label: "SelectListItem",
	      value: "selectlistitem"
	    },
	    form: {
	      props: {
		label: "Search Criteria",
		placeholder: "Search Criteria",
		fieldName: "fields"
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      validation: [],
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      }
	    },
	    column: {
	      header: "Search Criteria",
	      width: 150,
	      cell: {},
	      filter: false,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Array",
		value: 10
	      }
	    }
	  },
    
	  {
	    name: "formButtons",
	    dataType: {
	      label: "Array",
	      value: "array"
	    },
	    componentType: {
	      label: "ListItem",
	      value: "listitem"
	    },
	    form: {
	      props: {
		label: "Form Button",
		placeholder: "Form Button",
		fields: [
		  {
		    name: "ord",
		    dataType: {
		      label: "No",
		      value: "no"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "No.",
			placeholder: "No."
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [],
		      hide: true
		    },
		    column: {
		      field: "ord",
		      header: "No.",
		      width: 100,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "No",
			value: 12
		      }
		    }
		  },
		  {
		    name: "text",
		    dataType: {
		      label: "String",
		      value: "string"
		    },
		    componentType: {
		      label: "TextField",
		      value: "text"
		    },
		    form: {
		      props: {
			label: "Button Name",
			placeholder: "Button Name"
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "text",
		      header: "Button Name",
		      width: 500,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Text",
			value: 1
		      }
		    }
		  },
		  {
		    name: "action",
		    dataType: {
		      label: "Option",
		      value: "option"
		    },
		    componentType: {
		      label: "SelectField",
		      value: "select"
		    },
		    form: {
		      props: {
			label: "Action",
			placeholder: "Action",
			api: {
			  name: {
			    label: "useGetAction",
			    value: "useGetAction"
			  },
			  url: {
			    label: "/master/dropdown/studio/formAction",
			    value: "/master/dropdown/studio/formAction"
			  },
			  method: {
			    label: "GET",
			    value: 0
			  }
			}
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 4,
			xl: 4
		      },
		      validation: [
			{
			  validateType: {
			    label: "Required",
			    value: "required"
			  }
			}
		      ]
		    },
		    column: {
		      field: "action",
		      header: "Action",
		      width: 500,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: false,
		      type: {
			label: "Select",
			value: 6
		      }
		    }
		  },
		  {
		    name: "props",
		    dataType: {
		      label: "Object",
		      value: "object"
		    },
		    componentType: {
		      label: "GroupField",
		      value: "groupfield"
		    },
		    form: {
		      props: {
			label: "Button Style",
			placeholder: "Button Style",
			startIcon: {
			  label: "style",
			  value: "style"
			},
			fields: [
			  {
			    name: "color",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Color",
				placeholder: "Color",
				api: {
				  name: {
				    label: "useGetColor",
				    value: "useGetColor"
				  },
				  url: {
				    label: "/master/dropdown/studio/color",
				    value: "/master/dropdown/studio/color"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "color",
			      header: "Color",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  },
			  {
			    name: "variant",
			    dataType: {
			      label: "Option",
			      value: "option"
			    },
			    componentType: {
			      label: "SelectField",
			      value: "select"
			    },
			    form: {
			      props: {
				label: "Variant",
				placeholder: "Variant",
				api: {
				  name: {
				    label: "useGetVariant",
				    value: "useGetVariant"
				  },
				  url: {
				    label: "/master/dropdown/studio/variant",
				    value: "/master/dropdown/studio/variant"
				  },
				  method: {
				    label: "GET",
				    value: 0
				  }
				}
			      },
			      breakPoint: {
				xs: 12,
				sm: 12,
				md: 6,
				lg: 4,
				xl: 4
			      },
			      validation: [
				{
				  validateType: {
				    label: "Required",
				    value: "required"
				  }
				}
			      ]
			    },
			    column: {
			      field: "variant",
			      header: "Variant",
			      width: 150,
			      cell: {},
			      filter: false,
			      sort: true,
			      footer: null,
			      hide: false,
			      type: {
				label: "Select",
				value: 6
			      }
			    }
			  }
			]
		      },
		      breakPoint: {
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		      },
		      validation: []
		    },
		    column: {
		      field: "props",
		      header: "Button Style",
		      width: 450,
		      cell: {},
		      filter: false,
		      sort: true,
		      footer: null,
		      hide: true,
		      type: {
			label: "DisplayButton",
			value: 7
		      }
		    }
		  },
		  {
		    name: "api",
		    dataType: {
		      label: "API",
		      value: "api"
		    },
		    componentType: {
			label: "AutocompleteDetail",
			value: "autocompletedetail"
		    },
		    form: {
			props: {
			    label: "API",
			    placeholder: "API",
			    api: {
				name: {
				    label: "useGetAPIRawData",
				    value: "useGetAPIRawData"
				},
				url: {
				    label: "/master/data/api/67c90c4bd140d90beb63961f",
				    value: "/master/data/api/67c90c4bd140d90beb63961f"
				},
				method: {
				    label: "GET",
				    value: 0
				}
			    }
			},
			breakPoint: {
			    xs: 12,
			    sm: 12,
			    md: 12,
			    lg: 12,
			    xl: 12
			},
			validation: []
		    },
		    column: {
			field: "api",
			header: "API",
			width: 150,
			cell: {},
			filter: false,
			sort: true,
			footer: null,
			hide: true,
			type: {
			    label: "Object",
			    value: 9
			}
		    }
		  }
		],
		formButtons: [
		  {
		    text: "Cancel",
		    action: {
		      label: "Close",
		      value: 1
		    },
		    props: {
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    },
		    ord: 1
		  },
		  {
		    text: "Confirm",
		    action: {
		      label: "Confirm",
		      value: 3
		    },
		    props: {
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "contained",
			value: "contained"
		      }
		    },
		    ord: 2
		  }
		],
		tableButtons: [
		  {
		    text: "Add",
		    action: {
		      label: "Open",
		      value: 2
		    },
		    props: {
		      startIcon: {
			label: "Add",
			value: "add"
		      },
		      color: {
			label: "primary",
			value: "primary"
		      },
		      variant: {
			label: "outlined",
			value: "outlined"
		      }
		    }
		  }
		],
		columnAction: [
		  {
		    field: "colaction",
		    header: "Action",
		    type: {
		      label: "Action",
		      value: 0
		    },
		    width: 30,
		    cell: null,
		    filter: null,
		    sort: false,
		    hide: false,
		    groupName: null,
		    actions: [
		      {
			startIcon: {
			  label: "Edit",
			  value: "edit"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Open",
			  value: 2
			},
			ord: 1
		      },
		      {
			startIcon: {
			  label: "Delete",
			  value: "delete"
			},
			color: {
			  label: "inherit",
			  value: "inherit"
			},
			variant: {
			  label: "contained",
			  value: "contained"
			},
			action: {
			  label: "Delete",
			  value: 4
			},
			ord: 2
		      }
		    ]
		  }
		]
	      },
	      breakPoint: {
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	      },
	      group: {
		name: "Raw Data Details",
		componentGroupType: {
		  label: "Card",
		  value: "card"
		}
	      },
	      validation: []
	    },
	    column: {
	      field: "formButtons",
	      header: "Form Button",
	      width: 150,
	      cell: {},
	      filter: true,
	      sort: true,
	      footer: null,
	      hide: true,
	      type: {
		label: "Array",
		value: 10
	      }
	    }
	  }
	],
	formButtons: [
	  {
	    text: "Cancel",
	    action: {
	      label: "Navigate",
	      value: 5
	    },
	    props: {
	      variant: {
		label: "outlined",
		value: "outlined"
	      }
	    },
	    ord: 1,
	    route: "/raw-data"
	  },
	  {
	    text: "Preview",
	    action: {
	      label: "Preview",
	      value: 7
	    },
	    props: {
	      color: {
		label: "primary",
		value: "primary"
	      },
	      variant: {
		label: "contained",
		value: "contained"
	      }
	    },
	    ord: 2
	  },
	  {
	    text: "Submit",
	    action: {
	      label: "SubmitRawdata",
	      value: 17
	    },
	    api: {
	      name: {
		label: "useDataTemplate",
		value: "useDataTemplate"
	      },
	      url: {
		label: "/data/template",
		value: "/data/template"
	      },
	      method: {
		label: "PATCH",
		value: 3
	      },
	      redirect: "/raw-data"
	    },
	    props: {
	      color: {
		label: "primary",
		value: "primary"
	      },
	      variant: {
		label: "contained",
		value: "contained"
	      }
	    },
	    ord: 3
	  }
	],
	tableButtons: [
	  {
	    text: "New Raw Data",
	    action: {
	      label: "Navigate",
	      value: 5
	    },
	    route: "/raw-data/detail",
	    props: {
	      startIcon: {
		label: "add",
		value: "add"
	      },
	      color: {
		label: "primary",
		value: "primary"
	      },
	      variant: {
		label: "contained",
		value: "contained"
	      }
	    },
	    ord: 1
	  }
	],
	columnAction: [
	  {
	    field: "colaction",
	    header: "Action",
	    type: {
	      label: "Action",
	      value: 0
	    },
	    width: 30,
	    cell: null,
	    filter: null,
	    sort: false,
	    hide: false,
	    groupName: null,
	    actions: [
	      {
		startIcon: {
		  label: "edit",
		  value: "edit"
		},
		color: {
		  label: "inherit",
		  value: "inherit"
		},
		variant: {
		  label: "contained",
		  value: "contained"
		},
		route: "/raw-data/detail",
		action: {
		  label: "Detail",
		  value: 6
		},
		ord: 1
	      },
	      {
		startIcon: {
		  label: "Delete",
		  value: "delete"
		},
		color: {
		  label: "inherit",
		  value: "inherit"
		},
		variant: {
		  label: "contained",
		  value: "contained"
		},
		action: {
		  label: "DeleteItem",
		  value: 16
		},
		api: {
		  name: {
		    label: "useDeleteTemplate",
		    value: "useDeleteTemplate"
		  },
		  url: {
		    label: "/data/template/:dataID",
		    value: "/data/template/:dataID"
		  },
		  method: {
		    label: "DELETE",
		    value: 4
		  },
		},
		ord: 2
	      }
	    ]
	  }
	],
	columnPreview: [
	  {
	    field: "colpreview",
	    header: "Preview",
	    type: {
	      label: "Preview",
	      value: 14
	    },
	    width: 150,
	    cell: null,
	    filter: null,
	    sort: false,
	    hide: false,
	    groupName: null,
	    actions: [
	      {
		label: "View",
		isLabel: true,
		color: {
		  label: "primary",
		  value: "primary"
		},
		action: {
		  label: "Preview",
		  value: 7
		},
		ord: 1
	      }
	    ]
	  }
	],
	status: true,
	apiFetch: {
	  name: {
	    label: "useDataTemplate",
	    value: "useDataTemplate"
	  },
	  url: {
	    label: "/data/template",
	    value: "/data/template"
	  },
	  method: {
	    label: "GET",
	    value: 0
	  }
	},
	createAt: "2024-09-25T02:00:00.000Z",
	createBy: "SYSTEM",
	updateAt: "2024-09-25T02:00:00.000Z",
	updateBy: "STSYTEM"
      }