Ext.define('ExtJsExamples.view.ex.Example10CKEditorViewController', {
    extend: 'ExtJsExamples.view.ex.Example07RenderToBodyBaseViewController',
    alias: 'controller.ex10-ckeditor-view',

    requires: [
        'ExtJsExamples.util.Loader'
    ],

    init: function () {
        this.callParent(arguments);
    },

    /**
     * creates a hosting container for external UI
     * @param hostingContainerId
     * @returns string
     */
    getHostingContainerHtml: Ext.emptyFn,

    ckeditor: null,

    initHostingContainer: function(sender){
        this.createUI((sender.body || sender.bodyElement).dom);

        sender.on('resize', this.onViewResize, this);
    },

    /**
     * creates a ui component and renders it to the specified containerId
     * @param el
     */
    createUI: function(el){
        let me = this;

        //note: it is required to generate a custom build of ckeditor in order to get all the tools listed below!

        ClassicEditor
            .create(el, {
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        'subscript',
                        'superscript',
                        '|',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'alignment',
                        'outdent',
                        'indent',
                        '|',
                        'undo',
                        '|',
                        'redo',
                        '-',
                        'fontBackgroundColor',
                        'fontColor',
                        'fontSize',
                        'fontFamily',
                        '|',
                        'link',
                        'removeFormat',
                        //'imageUpload',
                        'imageInsert',
                        'mediaEmbed',
                        '|',
                        'insertTable'
                    ],
                    shouldNotGroupWhenFull: true
                },
                language: 'en',
                image: {
                    toolbar: [
                        'imageTextAlternative',
                        'imageStyle:full',
                        'imageStyle:side',
                        'linkImage'
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells',
                        'tableCellProperties',
                        'tableProperties'
                    ]
                },
                link: {
                    // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
                    //https://ckeditor.com/docs/ckeditor5/latest/features/link.html
                    addTargetToExternalLinks: true
                },
            })
            .then( newEditor => {
                me.ckEditor = newEditor;
            } )
            .catch( error => {
                console.error( error );
            } );
    },

    dumpHtml: function(){
        console.log(this.ckEditor.getData())
    },

    setHtml: function(){
        this.ckEditor.setData('<h1>Hello World!</h1>')
    },

    /**
     * container resize, so can monitor hosting container size changes
     */
    onViewResize: Ext.emptyFn
});
