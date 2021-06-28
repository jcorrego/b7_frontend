import { ElButton, ElDatePicker, ElTooltip, ElPopover } from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElDatePicker)
  app.use(ElTooltip)
  app.use(ElPopover)
}
