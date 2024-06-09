<?php

namespace App;

class Sender
{

    public  $feedback; //post feedback form

    private $txt;

    public function __construct()
    {
        $this->feedback = [
            'date' => $date = date('d/m/Y H:i:s a', time()),
            // 'name' =>  isset($_POST['name']) ? $_POST['name'] : null,
            // 'phone' =>  isset($_POST['phone']) ? $_POST['phone'] : null,
            //'email' =>  isset($_POST['email']) ? $_POST['email'] : null,

            'mob' =>  isset($_POST['text']) ? $_POST['mob'] : null,
            'text' =>  isset($_POST['text']) ? $_POST['text'] : null,
            'ALARM!' => 'перезвоните клиенту!'
        ];
    }

    function checkPost()
    {
        if (empty($this->name) || empty($this->phone)) {
            echo "Empty Post not allowed";
        } else {
            // Do some stuiff
            echo " Registration Done";
        }
    }

    function sendToEmail()
    {
        echo 'sendToEmail';
        var_dump(($this->feedback));
    }
    //dfi_by_bot - 1605900850:AAEY-QNR_SbGFVX4s0l780GlnXKt85DGeEg + gr: id":-362706894
    //d100 -> sendToTelegram($token="1695958144:AAHaxValPmwipfsHOkUlU1Dk8rfPc5Rw7ak", $chat_id="-526090228")
    public function sendToTelegram($token= "1605900850:AAEY-QNR_SbGFVX4s0l780GlnXKt85DGeEg", $chat_id= "-362706894")
    {
        //При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr      
        foreach ($this->feedback as $key => $value) {
            $this->txt .= "<b>" . $key . "</b> " . $value . "%0A";
        };
        $sendToTelegram =
            fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$this->txt}", "r");

        return $this->checkSendTo($sendToTelegram, 'telegram');
    }

    function sendToViber()
    {
        echo 'sendToEmail';
    }

    private function checkSendTo($send, $sender)
    {
        if ($send) {
            $this->feedback[$sender] = "success";
        } else {
            $this->feedback[$sender] = "failure";
        }
        return $this->feedback;
    }


};
