<template>
    <div>
        <head-top></head-top>
        <div class="quill-editor-example m-20 ">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
        <div class="quill-code">
          <code class="hljs" v-html="contentCode"></code>
        </div>
      </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import headTop from '@/components/headTop/headTop.vue'
import { quillEditor } from 'vue-quill-editor'

    export default {
        data() {
            return {
                content: '<h3>文本编辑</h3>',
			    editorOption: {
			        
		        }
            }
        },
        components:{
            headTop,
            quillEditor
        }
    }
</script>

<style lang="scss" scoped>

</style>