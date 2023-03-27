namespace API.Helpers.Enums
{
    public static class SettingMailGroupConstants
    {
        public static string Development_Department = "Dev_01";
        public static string Business_Unit_Receiving = "Biz_01";
        public static string Content = $"通知時間: @DateTime \n"
                               + $"Notification time: @DateTime \n"
                               + $"採購單號：@Purchase_No \n"
                               + $"Purchase_No: @Purchase_No \n"
                               + $"工具代號: @Tool_No \n"
                               + $"Tool No: @Tool_No \n"
                               + $"工具類別: @Tool_Type \n"
                               + $"Tool Type: @Tool_Type \n"
                               + $"寄送人員: @LoginUser \n"
                               + $"Sender: @LoginUser \n";
    }
}