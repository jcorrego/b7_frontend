import { ElButton, ElDatePicker, ElTooltip, ElPopover, ElTimePicker } from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElDatePicker)
  app.use(ElTooltip)
  app.use(ElPopover)
  app.use(ElTimePicker)
}
